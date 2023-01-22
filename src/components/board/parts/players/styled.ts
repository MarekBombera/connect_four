'use client'

import styled from 'styled-components'
import { colors } from '~/features/ui/theme/colors.style'
import { mq } from '~/features/ui/theme/mq.style'

import { ShadowEffect } from '~/features/ui/theme/utils/shadow-effect'

type Props = {
  isPlayerTwo?: boolean
}

export const Player = styled.div<Props>`
  ${ShadowEffect}
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 14.2rem;
  height: 8rem;
  background: ${colors.basic.white};

  ${mq.medium} {
    width: 27.2rem;
    height: 10rem;
  }

  ${mq.large} {
    grid-column: ${({ isPlayerTwo }) => (isPlayerTwo ? '3/3' : '1/1')};
    justify-self: ${({ isPlayerTwo }) => (isPlayerTwo ? 'start' : 'end')};
    top: 17rem;
    width: 14.2rem;
    height: 16rem;
  }
`
