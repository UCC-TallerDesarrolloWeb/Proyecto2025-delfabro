import { useEffect, useState } from 'react'
import Button from '@components/Button.jsx'
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
 * Página del catálogo de autos con búsqueda y filtros
 * @method Catalogo
 * @return {JSX.Element} Sección del catálogo con los autos que cumplen los filtros
 */
const Catalogo = () => {
  const [busqueda, setBusqueda] = useState('')
  const [tipo, setTipo] = useState('todos')
  const [combustible, setCombustible] = useState('todos')

  useEffect(() => {
    document.title = 'Catálogo | Deluxe Cars'
  }, [])

  const autosFiltrados = autos.filter((auto) => {
    const nombreAuto = (auto.marca + ' ' + auto.modelo).toLowerCase()
    const coincideBusqueda = nombreAuto.includes(busqueda.toLowerCase())
    const coincideTipo = tipo === 'todos' || auto.tipo === tipo
    const coincideCombustible = combustible === 'todos' || auto.combustible === combustible

    return coincideBusqueda && coincideTipo && coincideCombustible
  })

  /**
   * Vuelve todos los filtros a su valor inicial
   * @method limpiarFiltros
   * @return {void}
   */
  const limpiarFiltros = () => {
    setBusqueda('')
    setTipo('todos')
    setCombustible('todos')
  }

  return (
    <section id="catalogo">
      <h2>Catálogo de autos</h2>

      <div id="filtros">
        <label htmlFor="busqueda">Buscar auto</label>
        <input
          type="text"
          id="busqueda"
          placeholder="Marca o modelo"
          size="30"
          maxLength="40"
          value={busqueda}
          onChange={(evento) => setBusqueda(evento.target.value)}
        />

        <label htmlFor="tipo">Tipo</label>
        <select id="tipo" value={tipo} onChange={(evento) => setTipo(evento.target.value)}>
          <option value="todos">Todos</option>
          <option value="0km">0 km</option>
          <option value="usado">Usado</option>
        </select>

        <label htmlFor="combustible">Combustible</label>
        <select
          id="combustible"
          value={combustible}
          onChange={(evento) => setCombustible(evento.target.value)}
        >
          <option value="todos">Todos</option>
          <option value="nafta">Nafta</option>
          <option value="diesel">Diésel</option>
          <option value="hibrido">Híbrido</option>
        </select>

        <Button texto="Limpiar filtros" onClick={limpiarFiltros} />
      </div>

      {autosFiltrados.length === 0 && <p>No se encontraron autos con esos filtros.</p>}

      <div id="contenedor-autos">
        {autosFiltrados.map((auto) => (
          <Card
            key={auto.id}
            imagen={auto.imagen}
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
