'use client'

import { useEffect } from 'react'

import { isBrowser } from '~/features/utils/is-browser'

type UseEscKey = {
  registerKeyboardEvents: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

// Close modal on esc key

export const useEscKey = ({
  registerKeyboardEvents,
  setIsModalOpen,
}: UseEscKey) => {
  useEffect(() => {
    if (isBrowser && registerKeyboardEvents) {
      const handleEsc = (event: KeyboardEvent) => {
        event.key === 'Escape' && setIsModalOpen(false)
      }
      window.addEventListener('keydown', handleEsc)

      return () => window.removeEventListener('keydown', handleEsc)
    }
    return undefined
  }, [registerKeyboardEvents, setIsModalOpen])
}
