'use client'

import styled from 'styled-components'
import { mq } from '../../theme/mq.style'

export const SVG = styled.svg`
  width: 4rem;
  height: 4rem;

  ${mq.medium} {
    width: 5.2rem;
    height: 5.2rem;
  }
`
