'use client'

import styled from 'styled-components'
import { LinkTemplate } from '~/features/ui/components/link/styled'

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  width: 100%;
`

export const Link = styled(LinkTemplate)`
  display: grid;
  height: min-content;
  margin-top: 1rem;
  translate: -1rem 0;
  transition: all 0.5s ease-out;

  &:hover {
    transform: rotate(360deg);
  }
`
