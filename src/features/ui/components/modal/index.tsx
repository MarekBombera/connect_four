'use client'

import ReactDOM from 'react-dom'
import type { ReactNode, RefObject } from 'react'
import { forwardRef } from 'react'

import { StyledModal } from './styled'
import { useClickOutside } from '~/features/hooks/use-click-outside'
import { Overlay } from '../overlay/styled'

type Props = {
  children: ReactNode
  closeModal: () => void
}

export const Modal = forwardRef<HTMLDivElement, Props>(
  ({ children, closeModal }, ref) => {
    useClickOutside(ref as RefObject<HTMLDivElement>, closeModal)

    return ReactDOM.createPortal(
      <>
        <Overlay />
        <StyledModal ref={ref}>{children}</StyledModal>
      </>,
      document.body
    )
  }
)

Modal.displayName = 'Modal'
