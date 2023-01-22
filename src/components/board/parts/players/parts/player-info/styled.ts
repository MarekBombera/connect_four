'use client'

import styled from 'styled-components'
import { colors } from '~/features/ui/theme/colors.style'
import { mq } from '~/features/ui/theme/mq.style'
import { typography } from '~/features/ui/theme/typography.style'
import { LineClamp_One } from '~/features/ui/theme/utils/line-clamp'

type Props = {
  isPlayerTwo?: boolean
}

export const StyledPlayerInfo = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2.2rem;

  ${mq.medium} {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
    padding: ${({ isPlayerTwo }) =>
      isPlayerTwo ? '0 4.4rem 0 3rem' : '0 3.6rem 0 4.4rem'};
  }

  ${mq.large} {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 2.8rem 1rem 0;
  }
`

export const Name = styled.b<Props>`
  grid-column: ${({ isPlayerTwo }) => (isPlayerTwo ? '2/2' : '1/1')};
  grid-row: 1;
  ${LineClamp_One}
  ${typography.label.medium}
  text-align: center;
  text-transform: uppercase;
  color: ${colors.basic.black};

  ${mq.medium} {
    ${typography.label.xxLarge}
    text-align: ${({ isPlayerTwo }) => (isPlayerTwo ? 'end' : 'start')};
  }

  ${mq.large} {
    text-align: center;
  }
`

export const Score = styled.b<Props>`
  grid-column: ${({ isPlayerTwo }) => (isPlayerTwo ? '1/1' : '2/2')};
  grid-row: 1;
  ${LineClamp_One}
  ${typography.label.medium}
  text-align: start;
  color: ${colors.basic.black};
  font-size: 3.2rem;
  line-height: 4.1rem;

  ${mq.medium} {
    font-size: 5.6rem;
    line-height: 7.1rem;
  }
`
