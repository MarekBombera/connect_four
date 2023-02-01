import { draw, player1, player2 } from './constants'

export type Player1 = typeof player1
export type Player2 = typeof player2
export type Draw = typeof draw

export type CurrentPlayer = Player1 | Player2
export type Winner = Player1 | Player2 | Draw | null
export type CheckWinner = Player1 | Player2 | null | void
export type CheckDraw = Draw | null
export type Score = {
  player1: number
  player2: number
  draw: number
}

export type CellValue = Player1 | Player2 | null
export type BoardRow = Array<CellValue>
export type EmptyBoard = Array<Array<null>>
export type Board = Array<BoardRow>
