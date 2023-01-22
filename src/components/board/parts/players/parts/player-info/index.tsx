import { FC } from 'react'
import { Name, Score, StyledPlayerInfo } from './styled'

type Props = {
  name: string
  score: number
  isPlayerTwo?: boolean
}

export const PlayerInfo: FC<Props> = ({ name, score, isPlayerTwo }) => {
  return (
    <StyledPlayerInfo isPlayerTwo={isPlayerTwo}>
      <Name isPlayerTwo={isPlayerTwo}>{name}</Name>
      <Score isPlayerTwo={isPlayerTwo}>{score}</Score>
    </StyledPlayerInfo>
  )
}
