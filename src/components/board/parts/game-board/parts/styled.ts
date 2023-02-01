'use client'

import styled from 'styled-components'

type Props = {
  zIndex: number
}

export const SVG = styled.svg<Props>`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: none;
`
