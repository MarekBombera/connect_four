import { FC } from 'react'
import { PlayerOneIcon } from './icons/player-one'
import { PlayerTwoIcon } from './icons/player-two'

type Props = {
  playerTwo?: boolean
}

export const Avatar: FC<Props> = ({ playerTwo }) => {
  return <>{playerTwo ? <PlayerTwoIcon /> : <PlayerOneIcon />}</>
}
