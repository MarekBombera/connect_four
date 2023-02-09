'use client'

import styled, { css } from 'styled-components'
import { player1, player2 } from '~/features/game-logic/constants'
import { Winner } from '~/features/game-logic/types'
import { colors } from '~/features/ui/theme/colors.style'
import { mq } from '~/features/ui/theme/mq.style'

type Props = {
  winner: Winner
}

const PLAYER_ONE_WINNER = css`
  background: ${colors.accent.primary};
`

const PLAYER_TWO_WINNER = css`
  background: ${colors.accent.secondary};
`

export const Background = styled.div<Props>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 108%;
  background: ${colors.background.primary};
  border-radius: 6rem 6rem 0 0;
  z-index: 0;

  ${({ winner }) => winner === player1 && PLAYER_ONE_WINNER}
  ${({ winner }) => winner === player2 && PLAYER_TWO_WINNER}

  ${mq.large} {
    height: 110%;
  }
`
