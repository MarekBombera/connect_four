import { FC } from 'react'
import { DiscIcon } from './icon'
import { CellButton } from './styled'

type Props = {
  player: number | null
  columnIndex: number
  play: Function
}

export const Cell: FC<Props> = ({ player, columnIndex, play }) => {
  const handlePlay = () => {
    if (player === null) play(columnIndex)
  }

  return (
    <>
      <CellButton onClick={handlePlay}>
        {player && <DiscIcon player={player} />}
      </CellButton>
    </>
  )
}
