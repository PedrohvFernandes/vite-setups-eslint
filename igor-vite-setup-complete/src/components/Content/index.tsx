import * as S from './styles'

export type CounterProps = {
  children: React.ReactNode
}

export const Content = ({ children }: CounterProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}
