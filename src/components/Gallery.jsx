
import ImageCard from './ImageCard'

function Gallery({ photos }) {
  if (photos.length === 0) {
    return <p className="empty-gallery">No se encontraron fotografías.</p>
  }

  return (
    <section className="gallery">
      {photos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} />
      ))}
    </section>
  )
}

export default Gallery
