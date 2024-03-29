'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { Routes } from '~/features/constants/routes'
import { colors } from '~/features/ui/theme/colors.style'
import { mq } from '~/features/ui/theme/mq.style'
import { typography } from '~/features/ui/theme/typography.style'
import { ShadowEffect } from '~/features/ui/theme/utils/shadow-effect'
import { StyleReset } from '~/features/ui/theme/utils/style-reset'

export const StyledRulesLayout = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  padding: 0 2rem;
  background: ${colors.background.secondary};
`

export const StyledRules = styled.div`
  position: relative;
  display: grid;
  width: min(100%, 48rem);
  padding: 3rem 2rem 6rem;
  background: ${colors.basic.white};
  ${ShadowEffect.primary};

  ${mq.medium} {
    padding: 3rem 3rem 6rem;
  }
`

export const Title = styled.h1`
  margin-bottom: 3rem;
  ${typography.heading.h1}
  text-align: center;
  text-transform: uppercase;
  color: ${colors.basic.black};
`
export const Label = styled.b`
  margin-bottom: 1.6rem;
  ${typography.label.xxLarge}
  text-transform: uppercase;
  color: ${colors.background.secondary};
`

export const Description = styled.p`
  margin-bottom: 3.2rem;
  ${typography.paragraph.medium}
  color: ${colors.basic.black};
  opacity: 0.66;
`
export const RulesList = styled.ol`
  ${StyleReset}
  display: grid;
  align-items: start;
  list-style: none;
  gap: 2rem;
`
export const BackToMainMenu = styled(Link).attrs({
  href: Routes.home,
})`
  position: absolute;
  display: grid;
  place-items: center;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6.4rem;
  height: 6.4rem;
  background: ${colors.accent.primary};
  ${ShadowEffect.primary};
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  :hover {
    border: 0.3rem solid ${colors.background.hover.secondary};
    box-shadow: 0 1rem 0 ${colors.background.hover.secondary};
  }
`
