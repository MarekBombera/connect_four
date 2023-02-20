'use client'
import styled from 'styled-components'
import { StyleReset } from '../../theme/utils/style-reset'

export const ButtonTemplate = styled.button.attrs({ type: 'button' })`
  ${StyleReset}
  transition: all 0.1s ease-out;
  cursor: pointer;
`
