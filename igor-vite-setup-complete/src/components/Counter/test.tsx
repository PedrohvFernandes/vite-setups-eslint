import { act } from 'react-dom/test-utils'

import { render, screen } from 'utils/test-utils'

import { Counter } from '.'

// Analisamos o teste do componente Counter
describe('<Counter />', () => {
  it('increments count when the button is clicked', async () => {
    act(() => {
      // Usamos o render que padronizamos para renderizar o componente
      render(<Counter />)
    })

    // Buscamos o id que colocamos no componente
    const counter = screen.getByTestId('counter-view')
    // Buscamos o botão pelo texto
    const button = screen.getByRole('button', { name: /click me/i })

    // Inicialmente o counter deve ser 0
    expect(counter).toHaveTextContent('0')

    act(() => {
      // Dispara um evento de click no botão
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    // Se clicamos no botão, o counter deve ser 1
    expect(counter).toHaveTextContent('1')
  })
})
