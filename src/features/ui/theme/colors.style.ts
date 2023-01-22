import { palette } from './palette.style'

export const colors = {
  text: {
    primary: palette.basic.black,
    secondary: palette.basic.white,
  },

  background: {
    primary: palette.background.purple,
    secondary: palette.background.purpleDark,

    hover: {
      secondary: palette.hover.purpleDark,
    },
  },

  accent: {
    primary: palette.accent.yellow,
    secondary: palette.accent.pink,
  },

  basic: {
    black: palette.basic.black,
    white: palette.basic.white,
  },
}
