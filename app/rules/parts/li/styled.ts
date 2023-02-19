'use client'

import styled from 'styled-components'
import { colors } from '~/features/ui/theme/colors.style'
import { typography } from '~/features/ui/theme/typography.style'

export const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 2.5rem auto;
  width: 100%;
`
export const RuleNumber = styled.b`
  ${typography.paragraph.medium}
  color: ${colors.basic.black};
`

export const Rule = styled.p`
  ${typography.paragraph.medium}
  color: ${colors.basic.black};
  opacity: 0.66;
`
