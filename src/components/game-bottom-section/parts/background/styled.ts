'use client'

import styled from 'styled-components'
import { colors } from '~/features/ui/theme/colors.style'
import { mq } from '~/features/ui/theme/mq.style'

type Props = {}

export const Background = styled.section<Props>`
  position: absolute;
  bottom: 0;
  height: 103%;
  width: 100%;
  border-radius: 6rem 6rem 0 0;
  background: ${colors.background.primary};
  z-index: 0;

  ${mq.medium} {
    height: 115%;
  }
`
