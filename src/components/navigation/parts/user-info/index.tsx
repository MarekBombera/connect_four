'use client'

import { FC } from 'react'
import { useAuth } from '~/features/auth/hooks/use-auth'
import { ButtonSpinner } from '~/features/ui/components/spinner/styled'
import { Avatar } from './parts/avatar'
import { LoginButton, StyledUserInfo } from './styled'

type Props = {}

export const UserInfo: FC<Props> = ({}) => {
  const { user, loading, signInWithGoogle } = useAuth()

  return (
    <StyledUserInfo>
      {user ? (
        <Avatar user={user} />
      ) : (
        <LoginButton onClick={signInWithGoogle}>
          {loading ? <ButtonSpinner /> : 'Login'}
        </LoginButton>
      )}
    </StyledUserInfo>
  )
}
