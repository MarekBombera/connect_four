'use client'
import Link from 'next/link'
import styled from 'styled-components'
import { StyleReset } from '../../theme/utils/style-reset'

export const LinkTemplate = styled(Link).attrs({ passHref: true })`
  ${StyleReset}
  transition: all 0.1s ease-out;
  cursor: pointer;
`
