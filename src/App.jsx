
import { useCallback, useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'
import { searchPhotos } from './services/unsplash'
import './App.css'

const INITIAL_QUERY = 'code'

function App() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const controllerRef = useRef(null)

  // Función centralizada para realizar búsquedas
  const handleSearch = useCallback(async (query) => {
    // Cancelar la petición anterior si todavía existe
    controllerRef.current?.abort()

    const controller = new AbortController()
    controllerRef.current = controller

    try {
      setLoading(true)
      setError(null)

      const data = await searchPhotos(
        query,
        1,
        20,
        controller.signal
      )

      setPhotos(data.results)
    } catch (error) {
      if (error.name !== 'AbortError') {
        setError(error.message)
      }
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false)
      }
    }
  }, [])

  // Realizar la búsqueda inicial
  useEffect(() => {
    const controller = new AbortController()

    controllerRef.current = controller

    searchPhotos(INITIAL_QUERY, 1, 20, controller.signal)
      .then((data) => {
        setPhotos(data.results)
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setError(error.message)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      })

    return () => {
      controller.abort()
    }
  }, [])

  // Recuperar el estado inicial
  function handleReset() {
    handleSearch(INITIAL_QUERY)
  }

  return (
    <>
      <Header
        onSearch={handleSearch}
        onReset={handleReset}
      />

      <main className="main-content">
        <h1>Descubre inspiración</h1>

        {loading && (
          <p className="loading">
            Cargando fotografías...
          </p>
        )}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {!loading && !error && (
          <Gallery photos={photos} />
        )}
      </main>
    </>
  )
}

export default App
