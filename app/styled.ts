'use client'

import styled from 'styled-components'
import { colors } from '~/features/ui/theme/colors.style'
import { mq } from '~/features/ui/theme/mq.style'

export const StyledHomePage = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.background.secondary};

  ${mq.medium} {
    background: ${colors.background.primary};
  }
`
