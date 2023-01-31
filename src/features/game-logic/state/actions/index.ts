import { draw, player1, player2 } from '../../constants'
import { Board } from '../../types'
import { generateNewBoard } from '../../utils'
import { GameState } from '../reducer/types'
import { EndGameAction, TogglePlayerAction } from './types'

import { NEW_GAME, NEXT_ROUND, END_GAME, TOGGLE_PLAYER } from './constants'

export const restartGameAction = (gameState: GameState) => {
  return {
    type: NEW_GAME,
    board: generateNewBoard(),
    score: { ...gameState.score },
  }
}

export const nextRoundAction = (gameState: GameState) => {
  return {
    type: NEXT_ROUND,
    board: generateNewBoard(),
    winner: null,
    score: { ...gameState.score },
  }
}

export const player1WinsAction = (
  gameState: GameState,
  board: Board
): EndGameAction => {
  const { score } = gameState
  return {
    type: END_GAME,
    board,
    winner: player1,
    score: { ...score, player1: score.player1 + 1 },
  }
}

export const player2WinsAction = (
  gameState: GameState,
  board: Board
): EndGameAction => {
  const { score } = gameState
  return {
    type: END_GAME,
    board,
    winner: player2,
    score: { ...score, player2: score.player2 + 1 },
  }
}

export const drawGameAction = (
  gameState: GameState,
  board: Board
): EndGameAction => {
  const { score } = gameState
  return {
    type: END_GAME,
    board,
    winner: draw,
    score: { ...score, draw: score.draw + 1 },
  }
}

export const togglePlayerAction = (
  gameState: GameState,
  board: Board
): TogglePlayerAction => {
  const { player1, player2, currentPlayer } = gameState

  const nextPlayer = currentPlayer === player1 ? player2 : player1
  return {
    type: TOGGLE_PLAYER,
    currentPlayer: nextPlayer,
    board,
  }
}

export const togglePlayerTimesUpAction = (
  gameState: GameState
): TogglePlayerAction => {
  const { player1, player2, currentPlayer } = gameState

  const nextPlayer = currentPlayer === player1 ? player2 : player1
  return {
    type: TOGGLE_PLAYER,
    currentPlayer: nextPlayer,
    board: gameState.board,
  }
}
