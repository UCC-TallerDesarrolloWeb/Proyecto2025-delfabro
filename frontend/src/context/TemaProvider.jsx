import { useEffect, useState } from 'react'
import { TemaContext } from '@context/TemaContext.js'

/**
 * Comparte el tema del sitio (claro u oscuro) con todos los componentes y lo guarda en localStorage
 * @method TemaProvider
 * @param {JSX.Element} children - Componentes que pueden usar el tema
 * @return {JSX.Element} Proveedor del contexto del tema
 */
const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState(() => localStorage.getItem('tema') || 'claro')

  useEffect(() => {
    localStorage.setItem('tema', tema)
    document.body.className = tema === 'oscuro' ? 'tema-oscuro' : ''
  }, [tema])

  /**
   * Cambia el tema de claro a oscuro o de oscuro a claro
   * @method cambiarTema
   * @return {void}
   */
  const cambiarTema = () => {
    setTema(tema === 'claro' ? 'oscuro' : 'claro')
  }

  return (
    <TemaContext.Provider value={{ tema, cambiarTema }}>
      {children}
    </TemaContext.Provider>
  )
}

export default TemaProvider
