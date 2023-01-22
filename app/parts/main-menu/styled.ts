'use client'

import { colors } from 'src/features/ui/theme/colors.style'
import { mq } from 'src/features/ui/theme/mq.style'
import { ShadowEffect } from 'src/features/ui/theme/utils/shadow-effect'
import styled from 'styled-components'
import { MenuButton, MenuLink } from '~/components/menu-button/styled'
import { Routes } from '~/features/constants/routes'

export const StyledMainMenu = styled.main`
  position: absolute;
  display: grid;
  place-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 2rem;

  ${mq.medium} {
    width: 48rem;
    padding: 7rem 4rem 6rem;
    background: ${colors.background.secondary};
    ${ShadowEffect}
    border-radius: 2rem;
  }
`
export const MainMenuButton = styled(MenuButton)`
  width: 33.5rem;
  text-align: left;

  ${mq.medium} {
    width: 40rem;
  }
`

const LinkTemplate = styled(MenuLink).attrs({
  background: colors.accent.secondary,
})`
  width: 33.5rem;
  text-align: left;

  ${mq.medium} {
    width: 40rem;
  }
`

export const MultiPlayerLocal = styled(LinkTemplate).attrs({
  href: Routes.game.multiplayer.local,
})``

export const MultiPlayerOnline = styled(LinkTemplate).attrs({
  href: Routes.game.multiplayer.online,
})``
