// Um tipo especial para o styled-components, para ele receber o tema global da aplicação.
import theme from 'styles/theme'

type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  // O nosso thema vira um thema default do styled-components, um tipo
  export interface DefaultTheme extends Theme {}
}
