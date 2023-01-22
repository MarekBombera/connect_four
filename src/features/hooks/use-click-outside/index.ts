'use client'

import type { RefObject } from 'react'
import { useEffect } from 'react'

type AnyEvent = MouseEvent | TouchEvent

export const useClickOutside = <
  TClickOutside extends HTMLElement = HTMLElement
>(
  ref: RefObject<TClickOutside>,
  handler: (event: AnyEvent) => void
): void => {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current

      if (!el || el.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener(`mousedown`, listener)
    document.addEventListener(`touchstart`, listener)

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`touchstart`, listener)
    }
  }, [ref, handler])
}
