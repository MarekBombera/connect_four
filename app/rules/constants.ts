const rulesContent = {
  1: 'Red goes first in the first game.',
  2: 'Players must alternate turns, and only one disc can be dropped in each turn.',
  3: 'The game ends when there is a 4-in-a-row or a stalemate.',
  4: 'The starter of the previous game goes second on the next game.',
} as const

export const rules = Object.values(rulesContent)
