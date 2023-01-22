import { FC } from 'react'
import { Index, StyledLi, Text } from './styled'

type Props = {
  index: number
  text: string
}

export const Li: FC<Props> = ({ index, text }) => {
  return (
    <StyledLi>
      <Index>{index}</Index>
      <Text>{text}</Text>
    </StyledLi>
  )
}
