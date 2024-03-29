'use client'

import styled from 'styled-components'
import { ButtonTemplate } from '~/features/ui/components/button/styled'
import { colors } from '~/features/ui/theme/colors.style'
import { mq } from '~/features/ui/theme/mq.style'
import { typography } from '~/features/ui/theme/typography.style'
import { ShadowEffect } from '~/features/ui/theme/utils/shadow-effect'

export const StyledGameNavigation = styled.nav`
  align-self: end;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  align-items: center;
  width: min(100%, 34rem);
  margin: 0 auto;
  padding: 5rem 0;

  ${mq.medium} {
    width: min(100%, 63.2rem);
  }

  ${mq.large} {
    padding: 2rem 0 6rem;
  }
`

const Button = styled(ButtonTemplate)`
  justify-self: center;
  padding: 0.8rem 1.9rem;
  ${typography.label.medium}
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.02rem;
  color: ${colors.basic.white};
  background: ${colors.background.primary};
  ${ShadowEffect.secondary};

  &:hover {
    ${ShadowEffect.hover.secondary};
    background: ${colors.accent.primary};
  }

  &:active {
    ${ShadowEffect.active.secondary};
  }
`
export const MenuButton = styled(Button)``
export const RestartButton = styled(Button)``
