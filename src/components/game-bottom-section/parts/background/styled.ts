'use client'

import styled from 'styled-components'
import { colors } from '~/features/ui/theme/colors.style'
import { mq } from '~/features/ui/theme/mq.style'

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 108%;
  background: ${colors.background.primary};
  border-radius: 6rem 6rem 0 0;
  z-index: 0;

  ${mq.medium} {
    height: 115%;
  }
`
