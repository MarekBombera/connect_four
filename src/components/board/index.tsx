'use client'
import type { FC } from 'react'
import { Players } from './parts/players'
import { GameBoard } from './parts/game-board'

import { StyledBoard } from './styled'
import { GameBottomSection } from '../game-bottom-section'
import { useGame } from '~/features/game-logic/hooks/use-game'

type Props = {}

export const Board: FC<Props> = ({}) => {
  const { gameState, play, nextRound, togglePlayerTimesUp } = useGame()
  return (
    <>
      <StyledBoard>
        <Players score={gameState.score} />
        <GameBoard gameState={gameState} play={play} />
      </StyledBoard>
      <GameBottomSection
        currentPlayer={gameState.currentPlayer}
        winner={gameState.winner}
        nextRound={nextRound}
        togglePlayerTimesUp={togglePlayerTimesUp}
      />
    </>
  )
}
