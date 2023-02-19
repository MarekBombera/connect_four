import { initialGameState } from '../../constants'

import {
  NEW_GAME,
  NEXT_ROUND,
  TOGGLE_PLAYER,
  GAME_OVER,
} from '../actions/constants'

import type { GameState } from './types'
import type { GameAction } from '../actions/types'

export const gameReducer = (
  state: GameState = initialGameState,
  action: GameAction
) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...initialGameState,
      }
    case NEXT_ROUND:
      return {
        ...initialGameState,
        score: action.score,
      }
    case TOGGLE_PLAYER:
      return {
        ...state,
        currentPlayer: action.currentPlayer,
        board: action.board,
      }
    case GAME_OVER:
      return {
        ...state,
        gameOver: true,
        winner: action.winner,
        board: action.board,
        score: action.score,
      }
    default:
      throw Error(`Action "${action}" is not a valid action.`)
  }
}
