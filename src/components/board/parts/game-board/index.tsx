'use client'

import React, { FC } from 'react'
import { useMediaQueryMatch } from '~/features/hooks/use-media-query-match'
import { breakpoints } from '~/features/ui/theme/mq.style'

import { LayerBlackDesktop } from './parts/layer-black/desktop'
import { LayerBlackMobile } from './parts/layer-black/mobile'
import { LayerWhiteDesktop } from './parts/layer-white/desktop'
import { LayerWhiteMobile } from './parts/layer-white/mobile'

type Props = {}

export const GameBoard: FC<Props> = ({}) => {
  const isSmallOnly = useMediaQueryMatch(breakpoints.smallOnly)

  return (
    <>
      {isSmallOnly ? <LayerWhiteMobile /> : <LayerWhiteDesktop />}
      {isSmallOnly ? <LayerBlackMobile /> : <LayerBlackDesktop />}
    </>
  )
}
