'use client'

import styled from 'styled-components'
import { mq } from '~/features/ui/theme/mq.style'

export const StyledBoard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  ${mq.medium} {
    gap: 4rem;
  }

  ${mq.large} {
    display: grid;
    grid-template-columns: 1fr 63.2rem 1fr;
    place-items: center;
    gap: 6rem;
  }
`
