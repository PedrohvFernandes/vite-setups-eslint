import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

// Ele de fato é o nosso render para as nossas aplicações, meio que padronizamos como vamos usar o render nos testes, ex: render(<Component />) --> Counter>test.tsx
// O renderOptions é para passar as opções de renderização
// O ThemeProvider é para passar o tema para os componentes
// O theme é o tema que está sendo importado
// No fim a ui é o componente que está sendo renderizado e ele esta envolta do ThemeProvider
// O render vem da lib @testing-library/react
const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { customRender as render }
