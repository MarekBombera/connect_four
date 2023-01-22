import { FC } from 'react'
import { Avatar } from './parts/avatar'
import { PlayerInfo } from './parts/player-info'
import { Player } from './styled'

type Props = {}

export const Players: FC<Props> = () => {
  return (
    <>
      <Player>
        <Avatar />
        <PlayerInfo name="player 1" score={3} />
      </Player>
      <Player isPlayerTwo>
        <Avatar isPlayerTwo />
        <PlayerInfo name="player 2" score={3} isPlayerTwo />
      </Player>
    </>
  )
}
