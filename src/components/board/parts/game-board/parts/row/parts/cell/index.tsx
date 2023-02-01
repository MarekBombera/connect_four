import { FC } from 'react'
import { CellValue, Winner } from '~/features/game-logic/types'
import { DiscIcon } from './icon'
import { CellButton } from './styled'

type Props = {
  cellValue: CellValue
  columnIndex: number
  winner: Winner
  play: (col: number) => void
}

export const Cell: FC<Props> = ({ cellValue, columnIndex, winner, play }) => {
  const handlePlay = () => {
    if (cellValue === null) play(columnIndex)
  }

  return (
    <>
      <CellButton
        disabled={winner !== null}
        onClick={handlePlay}
        winner={winner}
      >
        {cellValue && <DiscIcon cellValue={cellValue} />}
      </CellButton>
    </>
  )
}
