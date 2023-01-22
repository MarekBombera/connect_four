'use client'

import { useState, useEffect } from 'react'
import { breakpoints, screenSize } from '~/features/ui/theme/mq.style'

// Hook is listening for changes in the screen size
// Breakpoints can match checkBreakpoints() cases or be custom - example: (min-width: 250px)

const { smallOnly, medium, large } = breakpoints

export const useMediaQueryMatch = (mediaQuery: string): boolean => {
  const [isMediaMatch, setIsMediaMatch] = useState<boolean>(false)

  const mq = {
    smallOnly: `(max-width: ${screenSize.medium / 16}em )`,
    medium: `(min-width: ${screenSize.medium / 16}em)`,
    large: `(min-width: ${screenSize.large / 16}em)`,
  }

  const checkBreakpoints = (mediaQuery: string): string => {
    switch (mediaQuery) {
      case smallOnly:
        return mq.smallOnly
      case medium:
        return mq.medium
      case large:
        return mq.large
      default:
        return mediaQuery
    }
  }

  useEffect(() => {
    const getScreenSizeMatch = window.matchMedia(checkBreakpoints(mediaQuery))
    setIsMediaMatch(getScreenSizeMatch.matches)

    const setMediaMatchResult = (e: MediaQueryListEvent): void => {
      setIsMediaMatch(e.matches)
    }
    getScreenSizeMatch.addEventListener('change', setMediaMatchResult)

    return () => {
      getScreenSizeMatch.removeEventListener('change', setMediaMatchResult)
    }
  }, [isMediaMatch, mediaQuery])

  return isMediaMatch
}
