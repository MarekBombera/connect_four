import { FC } from 'react'
import { Players } from './parts/players'
import { GameBoard } from './parts/game-board'

import { StyledBoard } from './styled'

type Props = {}

export const Board: FC<Props> = ({}) => {
  return (
    <StyledBoard>
      <Players />
      <GameBoard />
    </StyledBoard>
  )
}
