'use client'

import styled from 'styled-components'
import { mq } from '~/features/ui/theme/mq.style'

type Props = {
  zIndex: number
}

export const SVG = styled.svg<Props>`
  position: absolute;
  top: 12.5rem;
  z-index: ${({ zIndex }) => zIndex};

  ${mq.medium} {
    top: 13rem;
  }

  ${mq.large} {
    top: 0;
  }
`
