'use client'

import styled from 'styled-components'
import { colors } from 'src/features/ui/theme/colors.style'
import { typography } from 'src/features/ui/theme/typography.style'
import { ShadowEffectHover } from 'src/features/ui/theme/utils/shadow-effect'
import { ButtonTemplate } from '~/features/ui/components/button/styled'

type Props = {
  color?: string
  background?: string
}

export const MenuButton = styled(ButtonTemplate)<Props>`
  padding: 0 1.6rem;
  height: 7.1rem;
  ${typography.label.xxLarge}
  font-size: 2.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : colors.text.primary)};
  background: ${({ background }) =>
    background ? background : colors.basic.white};
  transition: all 0.2s ease-in-out;
  border: 0.3rem solid ${colors.basic.black};
  border-radius: 2rem;

  &:hover {
    translate: 0 -0.2rem;
    ${ShadowEffectHover};
  }
`
