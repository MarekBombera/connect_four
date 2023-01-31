import type {
  Board,
  CurrentPlayer,
  Player1,
  Player2,
  Score,
  Winner,
} from '../../types'

export type GameState = {
  player1: Player1
  player2: Player2
  currentPlayer: CurrentPlayer
  board: Board
  gameOver: boolean
  winner: Winner
  score: Score
}
