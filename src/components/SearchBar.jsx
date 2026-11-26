
import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const query = searchTerm.trim()

    if (!query) return

    onSearch(query)

    // Limpiar el buscador después de buscar
    setSearchTerm('')
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <button type="submit" aria-label="Buscar">
        🔍
      </button>

      <input
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Buscar"
        aria-label="Buscar imágenes"
      />
    </form>
  )
}

export default SearchBar
