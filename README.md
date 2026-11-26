# Deluxe Cars

**Deluxe Cars** es el sitio web de una concesionaria de autos, desarrollado como proyecto del **Taller de Desarrollo Web** de la Universidad Católica de Córdoba (UCC).

## Índice

- [Autor](#autor)
- [Sitio publicado](#sitio-publicado)
- [Contenido de la página](#contenido-de-la-página)
  - [Inicio](#inicio)
  - [Catálogo](#catálogo)
  - [Contacto](#contacto)
  - [Tema claro y oscuro](#tema-claro-y-oscuro)
- [Tecnologías usadas](#tecnologías-usadas)
- [Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)
- [Estructura del proyecto](#estructura-del-proyecto)

## Autor

- **Octavio Del Fabro**

## Sitio publicado

El sitio se puede ver en [GitHub Pages](https://ucc-tallerdesarrolloweb.github.io/Proyecto2025-delfabro/).

El repositorio tiene dos versiones del sitio:

- **Versión HTML, CSS y JavaScript** en la raíz del repositorio (primer parcial).
- **Versión React** en la carpeta `frontend` (segundo parcial y final), que es la que se publica.

## Contenido de la página

### Inicio

Presentación de la concesionaria con un acceso directo al catálogo.

### Catálogo

- Listado de autos con imagen, año, precio, tipo y combustible.
- Búsqueda por marca o modelo.
- Filtros por tipo (0 km o usado) y por combustible, que se actualizan mientras el usuario escribe o elige.
- Botón para limpiar los filtros.

### Contacto

Formulario de consulta con nombre, email, teléfono, auto de interés y mensaje. Los datos se validan en tiempo real y los errores se muestran debajo de cada campo.

### Tema claro y oscuro

Botón en la cabecera para cambiar el tema. La elección se guarda en el navegador.

## Tecnologías usadas

| Tecnología               | Uso                                          |
|--------------------------|----------------------------------------------|
| HTML5                    | Estructura de la primera versión             |
| CSS3                     | Estilos de la primera versión                |
| JavaScript               | Catálogo y validaciones de la primera versión |
| React                    | Interfaz de la segunda versión               |
| Vite                     | Creación y compilación del proyecto React    |
| react-router-dom         | Navegación entre páginas                     |
| Sass                     | Estilos de la versión React                  |
| Jest y Testing Library   | Tests                                        |
| Google Fonts             | Fuente Montserrat                            |
| Git y GitHub             | Control de versiones                         |
| GitHub Pages             | Publicación del sitio                        |

## Cómo ejecutar el proyecto

Se necesita tener instalado [Node.js](https://nodejs.org/). Los comandos se ejecutan dentro de la carpeta `frontend`:

1. `npm install` instala las dependencias.
2. `npm run dev` inicia el sitio en modo desarrollo.
3. `npm test` ejecuta los tests.
4. `npm run lint` revisa el código.
5. `npm run build` genera la versión final en la carpeta `dist`.

## Estructura del proyecto

- `index.html`, `css/`, `js/`: primera versión del sitio
- `imagenes/`: imágenes y favicon de la primera versión
- `frontend/`: versión React
  - `src/components/`: componentes reutilizables
  - `src/pages/`: páginas del sitio
  - `src/context/`: contexto del tema
  - `src/data/`: datos de los autos en formato JSON
  - `src/styles/`: estilos en Sass
  - `src/__tests__/`: tests
  - `public/`: favicon e imágenes de los autos
