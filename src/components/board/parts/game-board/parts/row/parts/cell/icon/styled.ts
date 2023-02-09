'use client'

import styled, { keyframes } from 'styled-components'
import { zIndex } from '~/components/board/styled'
import { mq } from '~/features/ui/theme/mq.style'

const discFallDown = (rowIndex: number) => keyframes`
  0% {

    translate: 0 calc(-9rem * (6 - ${rowIndex}) - 0.5rem ); // Reduce translateY by 9rem for each row

  
  }
  100% {
    translate: 0 0;
  }
    `

type Props = {
  rowIndex: number
}

export const SVG = styled.svg<Props>`
  width: 3.7rem;
  height: 3.7rem;
  margin-top: 0.4rem;
  z-index: ${zIndex.DISC};
  animation: ${({ rowIndex }) => discFallDown(rowIndex)}
    ${({ rowIndex }) => `${0.75 - 0.1 * rowIndex}s`} ease-in forwards; // Reduce animation time by 0.1s for each row

  ${mq.medium} {
    width: 7rem;
    height: 7.5rem;
    margin-top: 0.5rem;
  }
`
