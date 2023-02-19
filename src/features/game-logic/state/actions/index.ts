import { draw, player1, player2 } from '../../constants'
import { Board } from '../../types'
import { GameState } from '../reducer/types'
import { EndGameAction, NextRoundAction, TogglePlayerAction } from './types'

import { NEW_GAME, NEXT_ROUND, GAME_OVER, TOGGLE_PLAYER } from './constants'

export const newGameAction = () => {
  return {
    type: NEW_GAME,
  }
}

export const nextRoundAction = (gameState: GameState): NextRoundAction => {
  return {
    type: NEXT_ROUND,
    score: { ...gameState.score },
  }
}

export const player1WinsAction = (
  gameState: GameState,
  board: Board
): EndGameAction => {
  const { score } = gameState
  return {
    type: GAME_OVER,
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
    type: GAME_OVER,
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
    type: GAME_OVER,
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
