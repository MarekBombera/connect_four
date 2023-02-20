'use client'

import Image from 'next/image'
import styled from 'styled-components'
import { ButtonTemplate } from '~/features/ui/components/button/styled'
import { ShadowEffect } from '~/features/ui/theme/utils/shadow-effect'

export const StyledAvatar = styled(ButtonTemplate)``

export const Img = styled(Image)`
  ${ShadowEffect.outline.primary};
  border-radius: 50%;
`
