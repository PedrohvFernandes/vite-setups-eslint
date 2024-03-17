import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  /*O theme esta sendo provido por toda a aplicação  */
  /* Com o css ele faz a interpretação do arquivo de tema */
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`
