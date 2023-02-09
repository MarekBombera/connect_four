import { FC } from 'react'
import { BoardRow, Winner } from '~/features/game-logic/types'

import { Cell } from './parts/cell'

type RowProps = {
  row: BoardRow
  rowIndex: number
  winner: Winner
  play: (col: number) => void
}

export const Row: FC<RowProps> = ({ row, rowIndex, winner, play }) => {
  return (
    <>
      {row.map((cell, index) => (
        <Cell
          key={index}
          rowIndex={row.length - rowIndex - 2}
          cellValue={cell}
          columnIndex={index}
          winner={winner}
          play={play}
        />
      ))}
    </>
  )
}
