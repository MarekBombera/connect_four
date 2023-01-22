import { FC } from 'react'
import { Logo } from '~/features/ui/components/logo'
import {
  MainMenuButton,
  MultiPlayerLocal,
  MultiPlayerOnline,
  StyledMainMenu,
} from './styled'

export const MainMenu: FC = () => {
  return (
    <StyledMainMenu>
      <Logo margin="0 0 3rem" />
      <MultiPlayerLocal>Multiplayer - Local</MultiPlayerLocal>
      <MultiPlayerOnline> Multiplayer - Online</MultiPlayerOnline>
      <MainMenuButton>Game rules</MainMenuButton>
    </StyledMainMenu>
  )
}
