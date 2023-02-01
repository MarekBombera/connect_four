import { FC } from 'react'
import type { Score } from '~/features/game-logic/types'
import { Avatar } from './parts/avatar'
import { PlayerInfo } from './parts/player-info'
import { Player } from './styled'

type Props = {
  score: Score
}

export const Players: FC<Props> = ({ score }) => {
  return (
    <>
      <Player>
        <Avatar />
        <PlayerInfo name="player 1" score={score.player1} />
      </Player>
      <Player isPlayerTwo>
        <Avatar isPlayerTwo />
        <PlayerInfo name="player 2" score={score.player2} isPlayerTwo />
      </Player>
    </>
  )
}
