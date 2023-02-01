'use client'

import styled from 'styled-components'
import { zIndex } from '~/components/board/styled'
import { ButtonTemplate } from '~/features/ui/components/button/styled'
import { mq } from '~/features/ui/theme/mq.style'
import type { Winner } from '~/features/game-logic/types'

type Props = {
  winner: Winner
}

export const CellButton = styled(ButtonTemplate)<Props>`
  width: 3.7rem;
  height: 3.7rem;
  border-radius: 50%;
  z-index: ${zIndex.DISC};
  ${({ winner }) => winner !== null && `pointer-events: none;`}

  ${mq.medium} {
    width: 7rem;
    height: 7.5rem;
  }
`
