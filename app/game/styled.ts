'use client'

import styled from 'styled-components'
import { colors } from '~/features/ui/theme/colors.style'
import { mq } from '~/features/ui/theme/mq.style'

export const StyledGamePage = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-rows: 1fr auto 1fr;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${colors.background.secondary};

  ${mq.medium} {
  }
`
