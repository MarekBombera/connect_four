'use client'

import styled from 'styled-components'
import { ButtonTemplate } from '~/features/ui/components/button/styled'
import { colors } from '~/features/ui/theme/colors.style'
import { typography } from '~/features/ui/theme/typography.style'
import { ShadowEffect } from '~/features/ui/theme/utils/shadow-effect'

export const StyledUserInfo = styled.div`
  justify-self: end;
  position: relative;
  display: grid;
  place-items: center;
`

export const LoginButton = styled(ButtonTemplate)`
  display: grid;
  place-items: center;
  min-width: 13.1rem;
  height: 6.3rem;
  ${typography.label.xxLarge};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03rem;
  color: ${colors.basic.white};
  background: ${colors.accent.primary};
  ${ShadowEffect.primary};

  &:hover {
    ${ShadowEffect.hover.primary}
  }

  &:active {
    ${ShadowEffect.active.primary}
  }
`
