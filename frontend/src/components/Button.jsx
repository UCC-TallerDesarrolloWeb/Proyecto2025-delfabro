/**
 * Botón genérico reutilizable
 * @method Button
 * @param {string} texto - Texto que muestra el botón
 * @param {Function} onClick - Función que se ejecuta al hacer clic
 * @return {JSX.Element} Botón
 */
const Button = ({ texto, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {texto}
    </button>
  )
}

export default Button
