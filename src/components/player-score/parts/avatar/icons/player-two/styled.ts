'use client'

import styled from 'styled-components'
import { mq } from '~/features/ui/theme/mq.style'

export const SVG = styled.svg`
  position: absolute;
  right: -2.75rem;

  ${mq.large} {
    right: auto;
    top: -2.75rem;
  }
`
