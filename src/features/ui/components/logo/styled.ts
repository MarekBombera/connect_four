'use client'

import styled from 'styled-components'
import { mq } from '../../theme/mq.style'

type Props = {
  margin?: string
}

export const SVG = styled.svg<Props>`
  margin: ${({ margin }) => (margin ? margin : '0')};
  justify-self: center;
  width: 4rem;
  height: 4rem;

  ${mq.medium} {
    width: 5.2rem;
    height: 5.2rem;
  }
`
