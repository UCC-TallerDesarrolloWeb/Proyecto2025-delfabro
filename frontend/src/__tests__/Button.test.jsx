import { fireEvent, render, screen } from '@testing-library/react'
import Button from '@components/Button.jsx'

test('el botón muestra el texto que recibe', () => {
  render(<Button texto="Enviar" onClick={() => {}} />)
  expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument()
})

test('el botón ejecuta la función al hacer clic', () => {
  const funcion = jest.fn()
  render(<Button texto="Enviar" onClick={funcion} />)
  fireEvent.click(screen.getByRole('button', { name: 'Enviar' }))
  expect(funcion).toHaveBeenCalledTimes(1)
})
