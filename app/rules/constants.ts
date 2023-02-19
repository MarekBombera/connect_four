const rulesContent = {
  1: 'At the beginning of the game, the player with the red disc goes first. The other player will have the yellow disc.',
  2: 'Players take turns dropping one disc at a time into the game board.',
  3: 'The game ends when one player has four of their discs connected in a row, either vertically, horizontally, or diagonally. If all of the spaces on the board are filled without either player achieving four in a row, the game ends in a draw.',
  4: 'After each game, the player who went second in the previous game will start the next game. This allows for equal opportunities for each player to start the game.',
} as const

export const rules = Object.values(rulesContent)
