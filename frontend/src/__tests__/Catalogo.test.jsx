import { fireEvent, render, screen } from '@testing-library/react'
import Catalogo from '@pages/Catalogo.jsx'

test('el catálogo filtra los autos según la búsqueda', () => {
  render(<Catalogo />)
  expect(screen.getAllByRole('article')).toHaveLength(5)

  fireEvent.change(screen.getByLabelText('Buscar auto'), { target: { value: 'porsche' } })

  expect(screen.getAllByRole('article')).toHaveLength(1)
  expect(screen.getByRole('heading', { name: 'Porsche 911 Carrera' })).toBeInTheDocument()
})
