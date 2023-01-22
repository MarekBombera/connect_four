'use client'

import styled from 'styled-components'

import { mq } from '../../theme/mq.style'

export const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9;
  height ${mq.medium} {
    display: block;
  }
`
