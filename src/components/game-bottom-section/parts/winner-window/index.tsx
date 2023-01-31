import { FC } from 'react'
import { Winner } from '~/features/game-logic/types'
import { PlayAgain, PlayerName, StyledWinner, Wins } from './styled'

type Props = {
  winner: Winner
  nextRound: () => void
}

export const WinnerWindow: FC<Props> = ({ winner, nextRound }) => {
  return (
    <StyledWinner>
      <PlayerName>{`Player ${winner}`}</PlayerName>
      <Wins>Wins</Wins>
      <PlayAgain onClick={nextRound}>Play again</PlayAgain>
    </StyledWinner>
  )
}
