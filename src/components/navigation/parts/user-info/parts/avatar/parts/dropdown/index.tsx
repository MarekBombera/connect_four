import { FC } from 'react'
import { useAuth } from '~/features/auth/hooks/use-auth'
import { Routes } from '~/features/constants/routes'

import { OptionButton, OptionLink, StyledDropdown } from './styled'

type Props = {}

export const Dropdown: FC<Props> = ({}) => {
  const { signOut } = useAuth()

  return (
    <StyledDropdown>
      <OptionLink href={Routes.profile}>Profile</OptionLink>
      <OptionButton onClick={signOut}>Log out</OptionButton>
    </StyledDropdown>
  )
}
