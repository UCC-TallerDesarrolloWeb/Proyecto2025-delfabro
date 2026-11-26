import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Contacto from '@pages/Contacto.jsx'

test('el formulario muestra errores si se envía vacío', () => {
  render(
    <MemoryRouter>
      <Contacto />
    </MemoryRouter>
  )

  fireEvent.click(screen.getByRole('button', { name: 'Enviar consulta' }))

  expect(screen.getByText('Ingrese un nombre válido.')).toBeInTheDocument()
  expect(screen.getByText('Escriba su consulta.')).toBeInTheDocument()
})
