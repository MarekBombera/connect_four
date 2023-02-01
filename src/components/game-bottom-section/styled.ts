'use client'

import styled from 'styled-components'

import { mq } from '~/features/ui/theme/mq.style'

export const StyleGameBottomSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;

  ${mq.medium} {
    padding-bottom: 0;
  }
`