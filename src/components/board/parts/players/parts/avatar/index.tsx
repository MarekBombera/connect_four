import { FC } from 'react'
import { PlayerOneIcon } from './icons/player-one'
import { PlayerTwoIcon } from './icons/player-two'

type Props = {
  isPlayerTwo?: boolean
}

export const Avatar: FC<Props> = ({ isPlayerTwo }) => {
  return <>{isPlayerTwo ? <PlayerTwoIcon /> : <PlayerOneIcon />}</>
}
