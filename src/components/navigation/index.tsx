import { FC } from 'react'
import { UserInfo } from './parts/user-info'

import { StyledNav } from './styled'

type Props = {}

export const Navigation: FC<Props> = ({}) => {
  return (
    <StyledNav>
      <UserInfo />
    </StyledNav>
  )
}
