'use client'

import styled from 'styled-components'
import { colors } from 'src/features/ui/theme/colors.style'
import { typography } from 'src/features/ui/theme/typography.style'
import {
  ShadowEffect,
  ShadowEffectHover,
} from 'src/features/ui/theme/utils/shadow-effect'
import { ButtonTemplate } from '~/features/ui/components/button/styled'
import Link from 'next/link'
import { StyleReset } from '~/features/ui/theme/utils/style-reset'
import { mq } from '~/features/ui/theme/mq.style'

type Props = {
  color?: string
  background?: string
}

export const MenuButton = styled(ButtonTemplate)<Props>`
  height: 7.1rem;
  padding: 0 1.6rem;
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

export const MenuLink = styled(Link)<Props>`
  ${StyleReset}
  display: grid;
  align-content: center;
  height: 7rem;
  padding: 0 1.6rem;
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
  transition: all 0.2s ease-out;
  cursor: pointer;

  ${mq.smallOnly} {
    ${ShadowEffect}
  }

  &:hover {
    translate: 0 -0.2rem;
    ${ShadowEffectHover};
  }
`
