'use client'

import styled from 'styled-components'
import { mq } from '~/features/ui/theme/mq.style'

export const SVG = styled.svg`
  position: absolute;
  left: -2.75rem;

  ${mq.large} {
    left: auto;
    top: -2.75rem;
  }
`
