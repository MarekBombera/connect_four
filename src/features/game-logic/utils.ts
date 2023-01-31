import { draw } from './constants'
import { Board, CheckDraw, CheckWinner, EmptyBoard } from './types'

export const generateNewBoard = (): EmptyBoard =>
  Array(6).fill(Array(7).fill(null))

export const deepCloneBoard = (board: Board) => board.map((row) => [...row])

const checkVertical = (board: Board): CheckWinner => {
  // Check only if row is 3 or greater
  for (let row = 3; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
      const cellValue = board[row][col]
      if (
        cellValue &&
        cellValue === board[row - 1][col] &&
        cellValue === board[row - 2][col] &&
        cellValue === board[row - 3][col]
      ) {
        return cellValue
      }
    }
  }
}

const checkHorizontal = (board: Board): CheckWinner => {
  // Check only if column is 3 or less
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      const cellValue = board[row][col]
      if (cellValue) {
        if (
          cellValue === board[row][col + 1] &&
          cellValue === board[row][col + 2] &&
          cellValue === board[row][col + 3]
        ) {
          return cellValue
        }
      }
    }
  }
}

const checkDiagonalRight = (board: Board): CheckWinner => {
  // Check only if row is 3 or greater AND column is 3 or less
  for (let row = 3; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      const cellValue = board[row][col]
      if (cellValue) {
        if (
          cellValue === board[row - 1][col + 1] &&
          cellValue === board[row - 2][col + 2] &&
          cellValue === board[row - 3][col + 3]
        ) {
          return cellValue
        }
      }
    }
  }
}

const checkDiagonalLeft = (board: Board): CheckWinner => {
  // Check only if row is 3 or greater AND column is 3 or greater
  for (let row = 3; row < 6; row++) {
    for (let col = 3; col < 7; col++) {
      const cellValue = board[row][col]
      if (cellValue) {
        if (
          cellValue === board[row - 1][col - 1] &&
          cellValue === board[row - 2][col - 2] &&
          cellValue === board[row - 3][col - 3]
        ) {
          return cellValue
        }
      }
    }
  }
}

const checkDraw = (board: Board): CheckDraw => {
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
      if (board[row][col] === null) {
        return null
      }
    }
  }
  return draw
}

export const checkForWin = (board: Board) => {
  return (
    checkVertical(board) ||
    checkDiagonalRight(board) ||
    checkDiagonalLeft(board) ||
    checkHorizontal(board) ||
    checkDraw(board)
  )
}
