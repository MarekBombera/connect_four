'use client'

import styled from 'styled-components'
import { Routes } from '~/features/constants/routes'
import { colors } from '~/features/ui/theme/colors.style'
import { mq } from '~/features/ui/theme/mq.style'
import { typography } from '~/features/ui/theme/typography.style'
import { ShadowEffect } from '~/features/ui/theme/utils/shadow-effect'
import { MenuButton, MenuLink } from '../menu-button/styled'

export const StyleGameMenu = styled.div`
  ${ShadowEffect}
  display: flex;
  flex-direction: column;
  min-width: 33.5rem;
  gap: 3rem;
  padding: 3rem 2rem;
  background: ${colors.background.secondary};

  ${mq.medium} {
    width: 48rem;
    padding: 5rem 4rem;
  }
`

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  ${typography.label.xxLarge}
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 5.6rem;
  line-height: 7.1rem;
  color: ${colors.basic.white};
`
const ButtonTemplate = styled(MenuButton)`
  ${ShadowEffect}
  width: 100%;
  text-align: center;
`
export const Continue = styled(ButtonTemplate)``
export const Restart = styled(ButtonTemplate)``
export const Quit = styled(MenuLink).attrs({ href: Routes.home })`
  ${ShadowEffect}
  text-align: center;
  background: ${colors.accent.primary};
`
