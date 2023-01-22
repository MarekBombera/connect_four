import { FC } from 'react'
import { colors } from 'src/features/ui/theme/colors.style'
import { Logo } from '~/features/ui/components/logo'
import { MainMenuButton, StyledMainMenu } from './styled'

export const MainMenu: FC = () => {
  return (
    <StyledMainMenu>
      <Logo margin="0 0 3rem" />
      <MainMenuButton background={colors.accent.secondary}>
        Multiplayer - Local
      </MainMenuButton>
      <MainMenuButton>Game rules</MainMenuButton>
    </StyledMainMenu>
  )
}
