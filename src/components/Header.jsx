
import SearchBar from './SearchBar'

function BellIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
        </svg>
    )
}

function MessageIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
            <path d="M8 12h.01M12 12h.01M16 12h.01" />
        </svg>
    )
}

function Header({ onSearch, onReset }) {
    return (
        <header className="header">
            <button
                type="button"
                className="logo"
                onClick={onReset}
                aria-label="Volver al inicio de Pinterest"
                title="Inicio"
            >
                <img src="/pinterest-logo.png" alt="" />
            </button>

            <nav className="navigation" aria-label="Navegación principal">
                <a href="#" className="active">
                    Inicio
                </a>

                <a href="#">
                    Explorar
                </a>

                <a href="#">
                    Crear
                </a>
            </nav>

            <SearchBar onSearch={onSearch} />

            <div className="header-actions">
                <button
                    type="button"
                    className="header-icon"
                    aria-label="Notificaciones"
                    title="Notificaciones"
                >
                    <BellIcon />
                </button>

                <button
                    type="button"
                    className="header-icon"
                    aria-label="Mensajes"
                    title="Mensajes"
                >
                    <MessageIcon />
                </button>

                <button
                    type="button"
                    className="profile"
                    aria-label="Perfil"
                    title="Perfil"
                >
                    D
                </button>
            </div>
        </header>
    )
}

export default Header
