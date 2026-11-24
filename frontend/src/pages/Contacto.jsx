import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@components/Button.jsx'

/**
 * Comprueba si el valor de un campo del formulario es correcto
 * @method validarCampo
 * @param {string} campo - Nombre del campo a validar
 * @param {string} valor - Valor ingresado por el usuario
 * @return {string} Mensaje de error, o texto vacío si el valor es correcto
 */
const validarCampo = (campo, valor) => {
  if (campo === 'nombre' && (valor === '' || !isNaN(valor))) {
    return 'Ingrese un nombre válido.'
  }
  if (campo === 'email' && (!valor.includes('@') || !valor.includes('.'))) {
    return 'Ingrese un email válido.'
  }
  if (campo === 'telefono' && (valor === '' || isNaN(valor) || Number(valor) <= 0)) {
    return 'Ingrese un teléfono válido, solo con números.'
  }
  if (campo === 'mensaje' && valor === '') {
    return 'Escriba su consulta.'
  }
  return ''
}

/**
 * Página de contacto con el formulario de consulta y validación en tiempo real
 * @method Contacto
 * @return {JSX.Element} Sección de contacto
 */
const Contacto = () => {
  const navigate = useNavigate()
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    telefono: '',
    autoInteres: '',
    mensaje: ''
  })
  const [errores, setErrores] = useState({})

  /**
   * Guarda el valor escrito en un campo y lo valida en el momento
   * @method manejarCambio
   * @param {Event} evento - Evento onChange del campo modificado
   * @return {void}
   */
  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setDatos({ ...datos, [name]: value })
    setErrores({ ...errores, [name]: validarCampo(name, value) })
  }

  /**
   * Valida todos los campos y, si son correctos, envía la consulta y vuelve al inicio
   * @method enviarConsulta
   * @return {void}
   */
  const enviarConsulta = () => {
    const nuevosErrores = {
      nombre: validarCampo('nombre', datos.nombre),
      email: validarCampo('email', datos.email),
      telefono: validarCampo('telefono', datos.telefono),
      mensaje: validarCampo('mensaje', datos.mensaje)
    }
    setErrores(nuevosErrores)

    const hayErrores = Object.values(nuevosErrores).some((error) => error !== '')
    if (hayErrores) {
      return
    }

    alert('Consulta enviada. Nos pondremos en contacto a la brevedad.')
    navigate('/')
  }

  return (
    <section id="contacto">
      <h2>Formulario de consulta</h2>

      <form>
        <fieldset>
          <legend>Datos de contacto</legend>

          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingrese su nombre"
            size="30"
            maxLength="40"
            value={datos.nombre}
            onChange={manejarCambio}
            aria-invalid={errores.nombre ? 'true' : 'false'}
            aria-describedby="error-nombre"
          />
          <p id="error-nombre" className="error" role="alert">{errores.nombre}</p>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su email"
            size="30"
            maxLength="50"
            value={datos.email}
            onChange={manejarCambio}
            aria-invalid={errores.email ? 'true' : 'false'}
            aria-describedby="error-email"
          />
          <p id="error-email" className="error" role="alert">{errores.email}</p>

          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            placeholder="Ingrese su teléfono"
            size="30"
            maxLength="20"
            value={datos.telefono}
            onChange={manejarCambio}
            aria-invalid={errores.telefono ? 'true' : 'false'}
            aria-describedby="error-telefono"
          />
          <p id="error-telefono" className="error" role="alert">{errores.telefono}</p>

          <label htmlFor="auto-interes">Auto de interés</label>
          <input
            type="text"
            id="auto-interes"
            name="autoInteres"
            placeholder="Modelo de interés"
            size="30"
            maxLength="40"
            value={datos.autoInteres}
            onChange={manejarCambio}
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escriba su consulta"
            maxLength="200"
            value={datos.mensaje}
            onChange={manejarCambio}
            aria-invalid={errores.mensaje ? 'true' : 'false'}
            aria-describedby="error-mensaje"
          />
          <p id="error-mensaje" className="error" role="alert">{errores.mensaje}</p>

          <Button texto="Enviar consulta" onClick={enviarConsulta} />
        </fieldset>
      </form>
    </section>
  )
}

export default Contacto
