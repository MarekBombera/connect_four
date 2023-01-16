import { FC } from 'react'
import { BackgroundBlack } from './parts/background-black'
import { BackgroundWhite } from './parts/background-white'
import { StyledBoard } from './styled'

export const Board: FC = () => {
  return (
    <StyledBoard>
      <BackgroundWhite />
      <BackgroundBlack />
    </StyledBoard>
  )
}
