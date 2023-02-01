'use client'

import styled from 'styled-components'
import { zIndex } from '~/components/board/styled'
import { ButtonTemplate } from '~/features/ui/components/button/styled'
import { mq } from '~/features/ui/theme/mq.style'

export const CellButton = styled(ButtonTemplate)`
  width: 3.7rem;
  height: 3.7rem;
  border-radius: 50%;
  z-index: ${zIndex.DISC};

  ${mq.medium} {
    width: 7rem;
    height: 7.5rem;
  }
`
