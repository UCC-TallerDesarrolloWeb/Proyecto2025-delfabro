import Card from '@components/Card.jsx'
import autos from '@data/autos.json'

/**
 * Da formato a un precio con separador de miles y signo pesos
 * @method formatearPrecio
 * @param {number} precio - Precio del auto
 * @return {string} Precio con formato, por ejemplo $65.000.000
 */
const formatearPrecio = (precio) => {
  return '$' + precio.toLocaleString('es-AR')
}

/**
 * Página del catálogo de autos
 * @method Catalogo
 * @return {JSX.Element} Sección del catálogo con una tarjeta por auto
 */
const Catalogo = () => {
  return (
    <section id="catalogo">
      <h2>Catálogo de autos</h2>

      <div id="contenedor-autos">
        {autos.map((auto) => (
          <Card
            key={auto.id}
            imagen={import.meta.env.BASE_URL + auto.imagen}
            titulo={auto.marca + ' ' + auto.modelo}
          >
            <p>Año: {auto.anio}</p>
            <p>Precio: {formatearPrecio(auto.precio)}</p>
            <p>Tipo: {auto.tipo}</p>
            <p>Combustible: {auto.combustible}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Catalogo
