'use client'

import styled from 'styled-components'
import { zIndex } from '~/components/board/styled'
import { colors } from '~/features/ui/theme/colors.style'
import { mq } from '~/features/ui/theme/mq.style'
import { typography } from '~/features/ui/theme/typography.style'

type Props = {}

export const StyledPlayerTurn = styled.div<Props>`
  position: relative;
  display: grid;
  place-items: center;
  align-content: center;
  top: -1rem;
  height: 17.3rem;
  gap: 0.2rem;
  z-index: ${zIndex.PLAYER_TURN};

  ${mq.medium} {
    top: -3.5rem;
  }

  ${mq.large} {
    top: -4.2rem;
  }
`

export const PlayerName = styled.b`
  position: relative;
  margin-top: 2.5rem;
  ${typography.label.medium}
  text-transform: uppercase;
  color: ${colors.basic.white};
  z-index: 2;
`
export const Countdown = styled.time`
  position: relative;
  ${typography.heading.h4}
  color: ${colors.basic.white};
  z-index: 2;
`
