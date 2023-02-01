import { FC } from 'react'
import { BoardRow } from '~/features/game-logic/types'

import { Cell } from './parts/cell'

type RowProps = {
  row: BoardRow
  play: (col: number) => void
}

export const Row: FC<RowProps> = ({ row, play }) => {
  return (
    <>
      {row.map((cell, index) => (
        <Cell key={index} player={cell} columnIndex={index} play={play} />
      ))}
    </>
  )
}
