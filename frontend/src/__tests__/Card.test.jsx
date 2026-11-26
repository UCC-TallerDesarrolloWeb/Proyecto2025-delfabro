import { render, screen } from '@testing-library/react'
import Card from '@components/Card.jsx'

test('la tarjeta muestra el título y la imagen con su texto alternativo', () => {
  render(<Card imagen="imagenes/mustang.jpg" titulo="Ford Mustang GT" />)
  expect(screen.getByRole('heading', { name: 'Ford Mustang GT' })).toBeInTheDocument()
  expect(screen.getByAltText('Ford Mustang GT')).toBeInTheDocument()
})
