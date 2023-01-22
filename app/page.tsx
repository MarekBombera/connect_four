import { NextPage } from 'next'

import { MainMenu } from './parts/main-menu'
import { StyledHomePage } from './styled'

const HomePage: NextPage = () => {
  return (
    <StyledHomePage>
      <MainMenu />
    </StyledHomePage>
  )
}

export default HomePage
