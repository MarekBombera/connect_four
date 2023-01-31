'use client'

import styled from 'styled-components'
import { zIndex } from '~/components/board/styled'
import { ButtonTemplate } from '~/features/ui/components/button/styled'
import { colors } from '~/features/ui/theme/colors.style'
import { mq } from '~/features/ui/theme/mq.style'
import { typography } from '~/features/ui/theme/typography.style'
import {
  ShadowEffect,
  ShadowEffectButton,
} from '~/features/ui/theme/utils/shadow-effect'

type Props = {}

export const StyledWinner = styled.div<Props>`
  ${ShadowEffect}
  position: relative;
  display: grid;
  place-items: center;
  align-content: center;
  top: -1rem;
  padding: 1.7rem 7.4rem;
  background: ${colors.basic.white};
  z-index: ${zIndex.WINNER};

  ${mq.medium} {
    top: -3.5rem;
  }

  ${mq.large} {
    top: -4.2rem;
  }
`
export const PlayerName = styled.b`
  ${typography.label.medium}
  text-transform: uppercase;
  color: ${colors.basic.black};
`

export const Wins = styled.h2`
  ${typography.heading.h2}
  text-transform: uppercase;
  color: ${colors.basic.black};
`

export const PlayAgain = styled(ButtonTemplate)`
  padding: 0.8rem 1.8rem;
  ${typography.label.medium}
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.02rem;
  color: ${colors.basic.white};
  background: ${colors.background.primary};
  border: 0.3rem solid rgba(0, 0, 0, 0);
  border-radius: 2rem;

  &:hover {
    ${ShadowEffectButton};
    translate: 0 -0.2rem;
    background: ${colors.accent.primary};
  }
`
