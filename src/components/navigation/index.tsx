import { FC } from 'react'
import { Routes } from '~/features/constants/routes'
import { Logo } from '~/features/ui/components/logo'
import { UserInfo } from './parts/user-info'

import { Link, StyledNav } from './styled'

type Props = {}

export const Navigation: FC<Props> = ({}) => {
  return (
    <StyledNav>
      <Link href={Routes.home}>
        <Logo />
      </Link>

      <UserInfo />
    </StyledNav>
  )
}
