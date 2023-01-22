'use client'

import { useEffect } from 'react'

type UseScrollLock = {
  isLocked: boolean
}

export const useScrollLock = ({ isLocked }: UseScrollLock) => {
  useEffect(() => {
    if (isLocked && document) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isLocked])
}
