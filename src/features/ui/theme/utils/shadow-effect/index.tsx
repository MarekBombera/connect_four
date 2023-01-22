'use client'

import { css } from 'styled-components'
import { colors } from '../../colors.style'

export const ShadowEffect = css`
  border: 0.3rem solid ${colors.basic.black};
  border-radius: 2rem;
  box-shadow: 0 1rem 0 ${colors.basic.black};
`
export const ShadowEffectButton = css`
  border: 0.3rem solid ${colors.basic.black};
  box-shadow: 0 0.5rem 0 ${colors.basic.black};
`
