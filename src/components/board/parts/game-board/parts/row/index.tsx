import { FC } from 'react'
import { BoardRow, Winner } from '~/features/game-logic/types'

import { Cell } from './parts/cell'

type RowProps = {
  row: BoardRow
  winner: Winner
  play: (col: number) => void
}

export const Row: FC<RowProps> = ({ row, winner, play }) => {
  return (
    <>
      {row.map((cell, index) => (
        <Cell
          key={index}
          cellValue={cell}
          columnIndex={index}
          winner={winner}
          play={play}
        />
      ))}
    </>
  )
}
