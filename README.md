# Pinterest Learning Project

Réplica de Pinterest desarrollada como proyecto educativo para el curso de Full Stack Web Development.

La aplicación permite buscar fotografías utilizando la API de Unsplash y mostrarlas en una galería dinámica con diseño Masonry, adaptada a diferentes tamaños de pantalla.

## Tecnologías utilizadas

### Frontend
- React 19
- Vite
- JavaScript
- CSS3
- HTML5

### Backend
- Node.js
- Express 5
- Fetch API
- Unsplash API

## Funcionalidades

- Búsqueda de fotografías mediante Unsplash.
- Galería dinámica con distribución Masonry.
- Información de los fotógrafos.
- Avatares, fechas de publicación y likes.
- Enlaces a las fotografías y perfiles originales.
- Limpieza automática del buscador después de cada búsqueda.
- Recuperación de la búsqueda inicial al pulsar el logo.
- Diseño responsive para escritorio, tablet y móvil.
- Gestión de estados de carga y errores.

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/JaimeAJ09/pinterest-learning-project.git
cd pinterest-html
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
UNSPLASH_ACCESS_KEY=TU_ACCESS_KEY
```

La clave se obtiene registrando una aplicación en [Unsplash Developers](https://unsplash.com/developers).

También puedes utilizar el archivo `.env.example` como referencia para conocer las variables necesarias.

**Importante:** No subir nunca el archivo `.env` a GitHub, ya que contiene información privada.

### 4. Iniciar el frontend

En un terminal:

```bash
npm run dev
```

### 5. Iniciar el backend

En otro terminal:

```bash
npm run server
```

El frontend estará disponible en:

http://localhost:5173

El backend estará disponible en:

http://localhost:3000

## API utilizada

Se utiliza el endpoint de búsqueda de fotografías de Unsplash:

`https://api.unsplash.com/search/photos`

La comunicación con Unsplash se realiza desde el backend Express para mantener la clave de acceso fuera del código del frontend.

## Comprobaciones

Para ejecutar ESLint:

```bash
npm run lint
```

Para generar la versión de producción del frontend:

```bash
npm run build
```

## Autoría

Proyecto educativo independiente inspirado en la interfaz de Pinterest.

Las fotografías pertenecen a sus respectivos autores y se obtienen mediante la API de Unsplash.

Este proyecto no está afiliado ni patrocinado por Pinterest ni por Unsplash.