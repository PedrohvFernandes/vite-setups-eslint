import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    /* border: 0; */
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;
  `}
`
