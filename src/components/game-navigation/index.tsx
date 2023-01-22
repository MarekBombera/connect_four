import { FC } from 'react'
import { Logo } from '~/features/ui/components/logo'
import { MenuButton, RestartButton, StyledGameNavigation } from './styled'

type Props = {}

export const GameNavigation: FC<Props> = ({}) => {
  return (
    <StyledGameNavigation>
      <MenuButton>Menu</MenuButton>
      <Logo />
      <RestartButton>Restart</RestartButton>
    </StyledGameNavigation>
  )
}
