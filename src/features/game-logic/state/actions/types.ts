import type { Board, CurrentPlayer, Score, Winner } from '../../types'
import { GAME_OVER, NEW_GAME, NEXT_ROUND, TOGGLE_PLAYER } from './constants'

export type NewGameAction = {
  type: typeof NEW_GAME
}

export type NextRoundAction = {
  type: typeof NEXT_ROUND
  score: Score
}

export type TogglePlayerAction = {
  type: typeof TOGGLE_PLAYER
  currentPlayer: CurrentPlayer
  board: Board
}

export type EndGameAction = {
  type: typeof GAME_OVER
  winner: Winner
  board: Board
  score: Score
}

export type GameAction =
  | NewGameAction
  | NextRoundAction
  | TogglePlayerAction
  | EndGameAction
