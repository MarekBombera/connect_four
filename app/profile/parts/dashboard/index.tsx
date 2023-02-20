'use client'

import { FC } from 'react'
import { useAuth } from '~/features/auth/hooks/use-auth'
import { Avatar, Info, Label, ProfileInfo, StyledDashboard } from './styled'

type Props = {}

export const Dashboard: FC<Props> = ({}) => {
  const { user } = useAuth()
  if (!user) return null

  const { displayName, email, photoURL } = user

  return (
    <StyledDashboard>
      <Avatar
        src={photoURL ?? ''}
        width={120}
        height={120}
        alt="Profile picture"
      />
      <ProfileInfo>
        <Label>Name</Label>
        <Info>{displayName}</Info>
      </ProfileInfo>
      <ProfileInfo>
        <Label>Email</Label>
        <Info>{email}</Info>
      </ProfileInfo>
    </StyledDashboard>
  )
}
