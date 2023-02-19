'use client'

import styled from 'styled-components'
import { mq } from '~/features/ui/theme/mq.style'

export const StyledGameBoard = styled.div`
  grid-row: 2/2;
  grid-column: 1/-1;
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 3.4rem);
  grid-template-rows: repeat(6, 3.4rem);
  place-items: center;
  width: 33.5rem;
  height: 31rem;
  padding: 1.1rem;
  gap: 1.2rem 1.27rem;

  ${mq.medium} {
    grid-template-columns: repeat(7, 7rem);
    grid-template-rows: repeat(6, 7rem);
    width: 63.2rem;
    height: 58.4rem;
    padding: 1.7rem;
    gap: 1.8rem;
  }

  ${mq.large} {
    grid-row: 1/1;
    grid-column: 2/2;
  }
`
