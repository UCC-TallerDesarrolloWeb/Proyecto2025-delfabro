/**
 * Tarjeta genérica con imagen, título y contenido
 * @method Card
 * @param {string} imagen - Ruta de la imagen de la tarjeta
 * @param {string} titulo - Título de la tarjeta, también se usa como texto alternativo de la imagen
 * @param {JSX.Element} children - Contenido que se muestra debajo del título
 * @return {JSX.Element} Tarjeta armada
 */
const Card = ({ imagen, titulo, children }) => {
  return (
    <article className="auto-card">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      {children}
    </article>
  )
}

export default Card
