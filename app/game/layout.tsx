import { StyledGamePage } from './styled'

const GameLayout = ({ children }: { children: React.ReactNode }) => {
  return <StyledGamePage>{children}</StyledGamePage>
}

export default GameLayout
