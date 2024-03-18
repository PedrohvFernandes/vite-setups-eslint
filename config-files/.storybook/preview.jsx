import { ThemeProvider } from 'styled-components'


import RestStyles from 'styles/resets'
import theme from 'styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <RestStyles />
      <Story />
    </ThemeProvider>
  )
]