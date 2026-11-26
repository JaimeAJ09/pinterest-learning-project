
import express from 'express'

const app = express()
const PORT = 3000

// Comprobar que existe nuestra clave de Unsplash
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY

if (!UNSPLASH_ACCESS_KEY) {
  console.error('Error: falta UNSPLASH_ACCESS_KEY en el archivo .env')
  process.exit(1)
}

// Permitir peticiones desde nuestro frontend de Vite
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS')

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204)
  }

  next()
})

// Endpoint para buscar fotografías
app.get('/api/photos', async (req, res) => {
  try {
    const { query } = req.query

    // Comprobar que existe una búsqueda
    if (!query || typeof query !== 'string' || !query.trim()) {
      return res.status(400).json({
        error: 'Debes proporcionar un término de búsqueda.',
      })
    }

    const page = Math.max(1, Number(req.query.page) || 1)
    const perPage = Math.min(
      30,
      Math.max(1, Number(req.query.per_page) || 20)
    )

    // Construir la URL de Unsplash
    const params = new URLSearchParams({
      query: query.trim(),
      page: String(page),
      per_page: String(perPage),
    })

    const unsplashUrl = `https://api.unsplash.com/search/photos?${params}`

    // Realizar la petición a Unsplash
    const response = await fetch(unsplashUrl, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    })

    // Comprobar si Unsplash ha respondido correctamente
    if (!response.ok) {
      console.error('Error de Unsplash:', response.status)

      return res.status(response.status).json({
        error: 'No se pudieron obtener las fotografías de Unsplash.',
      })
    }

    // Convertir la respuesta a JSON
    const data = await response.json()

    // Devolver los datos al frontend
    res.json({
      results: data.results,
      total: data.total,
      total_pages: data.total_pages,
    })

  } catch (error) {
    console.error('Error en el servidor:', error)

    res.status(500).json({
      error: 'Ha ocurrido un error interno en el servidor.',
    })
  }
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`)
})
