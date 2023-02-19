import { GameState } from './state/reducer/types'
import { generateNewBoard } from './utils'

export const draw = 0 as const
export const player1 = 1 as const
export const player2 = 2 as const

export const initialGameState = {
  player1,
  player2,
  currentPlayer: player1,
  board: generateNewBoard(),
  gameOver: false,
  winner: null,
  score: {
    player1: 0,
    player2: 0,
    draw: 0,
  },
} as GameState
