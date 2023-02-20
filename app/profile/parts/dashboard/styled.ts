'use client'

import Image from 'next/image'
import styled from 'styled-components'
import { colors } from '~/features/ui/theme/colors.style'
import { mq } from '~/features/ui/theme/mq.style'
import { typography } from '~/features/ui/theme/typography.style'
import { ShadowEffect } from '~/features/ui/theme/utils/shadow-effect'

export const StyledDashboard = styled.main`
  position: absolute;
  display: grid;
  width: min(100%, 50rem);
  gap: 2rem;
  padding: 3.5rem 3rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.background.secondary};
  ${ShadowEffect.primary}

  ${mq.medium} {
  }
`
export const ProfileInfo = styled.div`
  display: grid;
  padding: 1rem 0;
  gap: 1.2rem;
`

export const Label = styled.b`
  ${typography.label.xLarge};
  text-transform: uppercase;
  letter-spacing: 0.03rem;
  color: ${colors.basic.white};
`

export const Info = styled.span`
  ${typography.label.medium};
  padding: 1.5rem 1rem;
  color: ${colors.basic.white};
  background: ${colors.background.primary};
  border-radius: 1.5rem;
  ${ShadowEffect.outline.secondary};
`

export const Avatar = styled(Image)`
  ${ShadowEffect.outline.primary}
  ${ShadowEffect.others.defaultBorderRadius}
`
