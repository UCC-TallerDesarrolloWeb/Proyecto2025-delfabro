import { Link } from 'react-router-dom'

/**
 * Página de inicio con la presentación de la concesionaria
 * @method Inicio
 * @return {JSX.Element} Sección de inicio
 */
const Inicio = () => {
  return (
    <section id="inicio">
      <h2>Concesionaria Deluxe Cars</h2>
      <p>
        En Deluxe Cars ofrecemos autos seleccionados para quienes buscan calidad,
        confianza y buena atención.
      </p>
      <Link to="/catalogo">Ver catálogo</Link>
    </section>
  )
}

export default Inicio
