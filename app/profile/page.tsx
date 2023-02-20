'use client'

import { NextPage } from 'next'

import { StyledProfile } from './styled'
import { Navigation } from '~/components/navigation'
import { Dashboard } from './parts/dashboard'

const ProfilePage: NextPage = () => {
  return (
    <StyledProfile>
      <Navigation />
      <Dashboard />
    </StyledProfile>
  )
}

export default ProfilePage
