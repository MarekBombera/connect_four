'use client'

import { NextPage } from 'next'
import { MainMenu } from './parts/main-menu'
import { StyledHomePage } from './styled'
import { Navigation } from '~/components/navigation'

const HomePage: NextPage = () => {
  return (
    <StyledHomePage>
      <Navigation />
      <MainMenu />
    </StyledHomePage>
  )
}

export default HomePage
