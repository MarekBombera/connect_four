import { GameState } from './state/reducer/types'
import { EmptyBoard } from './types'

export const draw = 0 as const
export const player1 = 1 as const
export const player2 = 2 as const

export const PLAYER_TURN_TIME = 30 // seconds

export const emptyBoard: EmptyBoard = Array.from({ length: 6 }, () =>
  Array(7).fill(null)
)

export const initialGameState = {
  player1,
  player2,
  currentPlayer: player1,
  board: emptyBoard,
  gameOver: false,
  winner: null,
  score: {
    player1: 0,
    player2: 0,
    draw: 0,
  },
} as GameState
