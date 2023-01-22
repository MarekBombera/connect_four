'use client'

import { useCallback, useRef, useState } from 'react'

import { useClickOutside } from '~/features/hooks/use-click-outside'

import { useEscKey } from './use-esc-key'
import { useScrollLock } from './use-scroll-lock'

type UseModal = {
  isInitiallyOpen?: boolean
  registerKeyboardEvents?: boolean
  lockScroll?: boolean
}

export const useModal = ({
  isInitiallyOpen = false,
  registerKeyboardEvents = true,
  lockScroll = true,
}: UseModal) => {
  const modalRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(isInitiallyOpen)

  useClickOutside(modalRef, () => setIsModalOpen(false))

  useEscKey({ registerKeyboardEvents, setIsModalOpen })

  useScrollLock({ isLocked: lockScroll && isModalOpen })

  const openModal = useCallback(() => setIsModalOpen(true), [setIsModalOpen])

  const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen])

  const toggleModal = useCallback(
    () => setIsModalOpen(!isModalOpen),
    [setIsModalOpen, isModalOpen]
  )

  return {
    modalRef,
    isModalOpen,
    openModal,
    closeModal,
    toggleModal,
    setIsModalOpen,
  }
}
