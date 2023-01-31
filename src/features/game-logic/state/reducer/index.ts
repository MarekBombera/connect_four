import { initialGameState } from '../../constants'
import {
  END_GAME,
  NEW_GAME,
  NEXT_ROUND,
  TOGGLE_PLAYER,
} from '../actions/constants'

import type { GameAction } from '../actions/types'
import type { GameState } from './types'

export const gameReducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...initialGameState,
        board: action.board,
      }
    case NEXT_ROUND:
      return {
        ...initialGameState,
        board: action.board,
        score: action.score,
        gameOver: false,
        winner: null,
      }
    case TOGGLE_PLAYER:
      return {
        ...state,
        currentPlayer: action.currentPlayer,
        board: action.board,
      }
    case END_GAME:
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
