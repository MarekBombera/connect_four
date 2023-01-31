import type { Board, CurrentPlayer, Winner } from '../../types'
import { END_GAME, NEW_GAME, NEXT_ROUND, TOGGLE_PLAYER } from './constants'

export type NewGameAction = {
  type: typeof NEW_GAME
  board: Board
}

export type NextRoundAction = {
  type: typeof NEXT_ROUND
  board: Board
  score: {
    player1: number
    player2: number
    draw: number
  }
}

export type TogglePlayerAction = {
  type: typeof TOGGLE_PLAYER
  currentPlayer: CurrentPlayer
  board: Board
}

export type EndGameAction = {
  type: typeof END_GAME
  winner: Winner
  board: Board
  score: {
    player1: number
    player2: number
    draw: number
  }
}

export type GameAction =
  | NewGameAction
  | NextRoundAction
  | TogglePlayerAction
  | EndGameAction
