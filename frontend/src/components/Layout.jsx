import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from '@components/Button.jsx'
import { TemaContext } from '@context/TemaContext.js'

/**
 * Estructura común de todas las páginas: cabecera, navegación, contenido y pie
 * @method Layout
 * @return {JSX.Element} Plantilla del sitio con la página activa en el Outlet
 */
const Layout = () => {
  const { tema, cambiarTema } = useContext(TemaContext)

  return (
    <div>
      <header>
        <h1>Deluxe Cars</h1>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        <Button texto={tema === 'claro' ? 'Modo oscuro' : 'Modo claro'} onClick={cambiarTema} />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Deluxe Cars - Sitio web</p>
        <p>Desarrollado por Octavio Del Fabro</p>
      </footer>
    </div>
  )
}

export default Layout
