'use client'

import { css } from 'styled-components'

const LineClamp = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`

export const LineClamp_One = css`
  ${LineClamp}
  -webkit-line-clamp: 1; /* number of lines to show */
`
export const LineClamp_Two = css`
  ${LineClamp}
  -webkit-line-clamp: 2; /* number of lines to show */
`
