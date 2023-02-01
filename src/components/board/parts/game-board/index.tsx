'use client'

import { FC } from 'react'
import { GameState } from '~/features/game-logic/state/reducer/types'
import { useMediaQueryMatch } from '~/features/hooks/use-media-query-match'
import { breakpoints } from '~/features/ui/theme/mq.style'

import { LayerBlackDesktop } from './parts/layer-black/desktop'
import { LayerBlackMobile } from './parts/layer-black/mobile'
import { LayerWhiteDesktop } from './parts/layer-white/desktop'
import { LayerWhiteMobile } from './parts/layer-white/mobile'
import { Row } from './parts/row'

import { StyledGameBoard } from './styled'

type Props = {
  gameState: GameState
  play: (col: number) => void
}

export const GameBoard: FC<Props> = ({ gameState, play }) => {
  const isSmallOnly = useMediaQueryMatch(breakpoints.smallOnly)

  return (
    <StyledGameBoard>
      {gameState.board.map((row, index) => (
        <Row key={index} row={row} winner={gameState.winner} play={play} />
      ))}
      {isSmallOnly ? <LayerWhiteMobile /> : <LayerWhiteDesktop />}
      {isSmallOnly ? <LayerBlackMobile /> : <LayerBlackDesktop />}
    </StyledGameBoard>
  )
}
