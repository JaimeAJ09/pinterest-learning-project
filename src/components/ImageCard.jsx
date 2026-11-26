
function addAttributionParams(url) {
  const attributionUrl = new URL(url)

  attributionUrl.searchParams.set(
    'utm_source',
    'pinterest_learning_project'
  )

  attributionUrl.searchParams.set(
    'utm_medium',
    'referral'
  )

  return attributionUrl.toString()
}

function ImageCard({ photo }) {
  const imageDate = new Date(photo.created_at).toLocaleDateString('es-ES')

  const photoUrl = addAttributionParams(photo.links.html)
  const photographerUrl = addAttributionParams(photo.user.links.html)
  const unsplashUrl = addAttributionParams('https://unsplash.com/')

  return (
    <article className="image-card">
      <div className="image-media">
        <a
          href={photoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="image-link"
        >
          <img
            src={photo.urls.regular}
            alt={photo.alt_description || 'Fotografía de Unsplash'}
            loading="lazy"
          />

          <span className="visit-button">
            Visitar
          </span>
        </a>

        <div className="image-likes">
          <span>♥</span>
          <span>{photo.likes}</span>
        </div>

        <a
          href={photographerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="photographer-avatar"
          aria-label={`Ver perfil de ${photo.user.name}`}
        >
          <img
            src={photo.user.profile_image.medium}
            alt=""
          />
        </a>
      </div>

      <div className="image-info">
        <a
          href={photographerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="photographer-name"
        >
          {photo.user.name}
        </a>

        <p className="image-date">
          ↥ {imageDate}
        </p>

        <p className="image-attribution">
          Foto de{' '}
          <a
            href={photographerUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {photo.user.name}
          </a>
          {' '}en{' '}
          <a
            href={unsplashUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </p>
      </div>
    </article>
  )
}

export default ImageCard
