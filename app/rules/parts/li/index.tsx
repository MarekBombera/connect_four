import { FC } from 'react'
import { StyledLi, RuleNumber, Rule } from './styled'

type Props = {
  ruleNumber: number
  rule: string
}

export const Li: FC<Props> = ({ ruleNumber, rule }) => {
  return (
    <StyledLi>
      <RuleNumber>{ruleNumber}</RuleNumber>
      <Rule>{rule}</Rule>
    </StyledLi>
  )
}
