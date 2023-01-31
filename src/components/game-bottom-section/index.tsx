import { FC } from 'react'
import type { CurrentPlayer, Winner } from '~/features/game-logic/types'

import { Background } from './parts/background/styled'
import { PlayerTurn } from './parts/player-turn'
import { WinnerWindow } from './parts/winner-window'
import { StyleGameBottomSection } from './styled'

type Props = {
  winner: Winner
  currentPlayer: CurrentPlayer
  nextRound: () => void
  togglePlayerTimesUp: () => void
}

export const GameBottomSection: FC<Props> = ({
  winner,
  currentPlayer,
  nextRound,
  togglePlayerTimesUp,
}) => {
  return (
    <StyleGameBottomSection>
      {winner ? (
        <WinnerWindow winner={winner} nextRound={nextRound} />
      ) : (
        <PlayerTurn
          currentPlayer={currentPlayer}
          togglePlayerTimesUp={togglePlayerTimesUp}
        />
      )}
      <Background />
    </StyleGameBottomSection>
  )
}
