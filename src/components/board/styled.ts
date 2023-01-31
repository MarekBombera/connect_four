'use client'

import styled from 'styled-components'
import { mq } from '~/features/ui/theme/mq.style'

export const zIndex = {
  LAYER_BLACK: 1,
  DISC: 2,
  LAYER_WHITE: 3,
  PLAYER_TURN: 4,
  WINNER: 4,
}

export const StyledBoard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  width: 100%;
  gap: 2rem;

  ${mq.medium} {
    gap: 4rem;
  }

  ${mq.large} {
    grid-template-columns: 1fr 63.2rem 1fr;
    gap: 6rem;
  }
`
