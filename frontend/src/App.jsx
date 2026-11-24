import { HashRouter, Route, Routes } from 'react-router-dom'
import TemaProvider from '@context/TemaProvider.jsx'
import Layout from '@components/Layout.jsx'
import Inicio from '@pages/Inicio.jsx'
import Catalogo from '@pages/Catalogo.jsx'
import Contacto from '@pages/Contacto.jsx'

/**
 * Componente principal que define las rutas del sitio
 * @method App
 * @return {JSX.Element} Rutas de la aplicación
 */
const App = () => {
  return (
    <TemaProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="catalogo" element={<Catalogo />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </HashRouter>
    </TemaProvider>
  )
}

export default App
