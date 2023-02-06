import { useReducer } from 'react'
import { draw, player1, player2, initialGameState } from '../../constants'
import {
  drawGameAction,
  nextRoundAction,
  player1WinsAction,
  player2WinsAction,
  restartGameAction,
  togglePlayerAction,
} from '../../state/actions'
import { gameReducer } from '../../state/reducer'
import { checkForWin, deepCloneBoard } from '../../utils'

export const useGame = () => {
  const [gameState, dispatch] = useReducer(gameReducer, initialGameState)

  const { currentPlayer, gameOver } = gameState

  const restartGame = () => dispatch(restartGameAction(initialGameState))

  const nextRound = () => dispatch(nextRoundAction(gameState))

  const togglePlayerTimesUp = () =>
    dispatch(togglePlayerAction(gameState, gameState.board))

  const play = (col: number) => {
    if (!gameOver) {
      const board = deepCloneBoard(gameState.board)

      //check if cell is taken by starting at the bottom row and working up
      for (let row = 5; row >= 0; row--) {
        if (!board[row][col]) {
          board[row][col] = currentPlayer
          break
        }
      }

      const result = checkForWin(board)

      switch (result) {
        case player1:
          dispatch(player1WinsAction(gameState, board))
          break
        case player2:
          dispatch(player2WinsAction(gameState, board))
          break
        case draw:
          dispatch(drawGameAction(gameState, board))
          break
        default:
          dispatch(togglePlayerAction(gameState, board))
      }
    }
  }

  return { gameState, play, nextRound, restartGame, togglePlayerTimesUp }
}
