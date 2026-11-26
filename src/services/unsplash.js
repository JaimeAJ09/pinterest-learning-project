
const API_URL = 'http://localhost:3000/api/photos'

export async function searchPhotos(
  query,
  page = 1,
  perPage = 20,
  signal
) {
  const params = new URLSearchParams({
    query,
    page: String(page),
    per_page: String(perPage),
  })

  const response = await fetch(`${API_URL}?${params}`, {
    signal,
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Error al buscar fotografías')
  }

  return response.json()
}
