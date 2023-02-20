'use client'

import styled, { css, keyframes } from 'styled-components'
import { ButtonTemplate } from '~/features/ui/components/button/styled'
import { LinkTemplate } from '~/features/ui/components/link/styled'
import { colors } from '~/features/ui/theme/colors.style'
import { typography } from '~/features/ui/theme/typography.style'
import { ShadowEffect } from '~/features/ui/theme/utils/shadow-effect'

const ShowDropdown = keyframes`
0% {
    right: -50%;
    opacity: 0.4;
}

50% {
    right: 0;
}

100% {
    right: -20%;
    opacity: 1;
}
`

export const StyledDropdown = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  top: 110%;
  right: -50%;
  gap: 2.2rem;
  padding: 3rem 2.5rem;
  background: ${colors.background.secondary};
  ${ShadowEffect.primary};

  animation: ${ShowDropdown} 0.3s ease-out forwards;
`

const OptionTemplate = css`
  width: 15rem;
  padding: 1.4rem 0;
  ${typography.label.medium};
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
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

export const OptionButton = styled(ButtonTemplate)`
  ${OptionTemplate}
`
export const OptionLink = styled(LinkTemplate)`
  ${OptionTemplate}
`
