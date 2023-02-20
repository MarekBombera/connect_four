'use client'

import { css } from 'styled-components'
import { colors } from '../../colors.style'

const defaultBorder = css`
  border: 0.3rem solid ${colors.basic.black};
`

const borderInvisible = css`
  border: 0.3rem solid rgba(0, 0, 0, 0);
`

const defaultBorderRadius = css`
  border-radius: 2rem;
`

const primary = css`
  ${defaultBorder}
  ${defaultBorderRadius}
  box-shadow: 0 0.8rem 0 ${colors.basic.black};
`

const secondary = css`
  ${borderInvisible}
  ${defaultBorderRadius}
`

const hoverPrimary = css`
  ${defaultBorder}
  box-shadow: 0 0.6rem 0 ${colors.basic.black};
  translate: 0 0.2rem;
`

const hoverSecondary = css`
  ${defaultBorder}
  ${defaultBorderRadius}
  box-shadow: 0 0.5rem 0 ${colors.basic.black};
  translate: 0 -0.4rem;
`

const clickPrimary = css`
  transition: all 0s;
  box-shadow: 0 0.1rem 0 ${colors.basic.black};
  translate: 0 0.9rem;
`
const clickSecondary = css`
  transition: all 0s;
  box-shadow: 0 0.1rem 0 ${colors.basic.black};
  translate: 0 0.1rem;
`
export const ShadowEffect = {
  primary,
  secondary,
  hover: {
    primary: hoverPrimary,
    secondary: hoverSecondary,
  },
  active: {
    primary: clickPrimary,
    secondary: clickSecondary,
  },
}
