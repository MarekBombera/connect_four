import { FC, useEffect } from 'react'
import {
  DEFAULT_TURN_TIME,
  usePlayerTurnTimer,
} from '~/features/game-logic/hooks/use-player-turn-timer'
import { CurrentPlayer } from '~/features/game-logic/types'
import { Octagon } from './parts/octagon'
import { Countdown, PlayerName, StyledPlayerTurn } from './styled'

type Props = {
  currentPlayer: CurrentPlayer
  togglePlayerTimesUp: () => void
}

export const PlayerTurn: FC<Props> = ({
  currentPlayer,
  togglePlayerTimesUp,
}) => {
  const { turnTimer, setTurnTimer, isTimeUp } = usePlayerTurnTimer()

  useEffect(() => {
    isTimeUp && togglePlayerTimesUp()
  }, [isTimeUp, togglePlayerTimesUp])

  useEffect(() => {
    setTurnTimer(DEFAULT_TURN_TIME)
  }, [currentPlayer, setTurnTimer])

  return (
    <StyledPlayerTurn>
      <PlayerName>{`Player ${currentPlayer}’s turn`}</PlayerName>
      <Countdown>{`${turnTimer}s`}</Countdown>
      <Octagon currentPlayer={currentPlayer} />
    </StyledPlayerTurn>
  )
}
