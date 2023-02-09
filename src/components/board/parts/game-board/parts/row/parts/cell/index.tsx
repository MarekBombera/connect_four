import { FC } from 'react'
import { CellValue, Winner } from '~/features/game-logic/types'
import { DiscIcon } from './icon'
import { CellButton } from './styled'

type Props = {
  cellValue: CellValue
  columnIndex: number
  rowIndex: number
  winner: Winner
  play: (col: number) => void
}

export const Cell: FC<Props> = ({
  cellValue,
  columnIndex,
  rowIndex,
  winner,
  play,
}) => {
  const handlePlay = () => !cellValue && play(columnIndex)

  return (
    <>
      <CellButton
        disabled={winner !== null || cellValue !== null}
        onClick={handlePlay}
        winner={winner}
        cellValue={cellValue}
      >
        {cellValue && <DiscIcon cellValue={cellValue} rowIndex={rowIndex} />}
      </CellButton>
    </>
  )
}
