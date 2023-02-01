'use client'

import styled from 'styled-components'
import { zIndex } from '~/components/board/styled'
import { mq } from '~/features/ui/theme/mq.style'

export const SVG = styled.svg`
  width: 3.7rem;
  height: 3.7rem;
  margin-top: 0.4rem;
  z-index: ${zIndex.DISC};

  ${mq.medium} {
    width: 7rem;
    height: 7.5rem;
    margin-top: 0.5rem;
  }
`
