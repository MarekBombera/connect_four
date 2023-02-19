import { NextPage } from 'next'
import { rules } from './constants'
import { CheckIcon } from './parts/icons/check'
import { Li } from './parts/li'

import {
  StyledRules,
  Label,
  Title,
  Description,
  RulesList,
  BackToMainMenu,
} from './styled'

const RulesPage: NextPage = () => {
  const renderedList = rules.map((rule, index) => {
    return <Li key={rule} ruleNumber={index + 1} rule={rule} />
  })

  return (
    <StyledRules>
      <Title>Rules</Title>
      <Label>Objective</Label>
      <Description>
        Be the first player to connect 4 of the same colored discs in a row
        (either vertically, horizontally, or diagonally).
      </Description>
      <Label>How to play</Label>
      <RulesList>{renderedList}</RulesList>
      <BackToMainMenu>
        <CheckIcon />
      </BackToMainMenu>
    </StyledRules>
  )
}

export default RulesPage
