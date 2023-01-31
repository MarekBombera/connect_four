import { FC } from 'react'
import { player1 } from '~/features/game-logic/constants'
import { CurrentPlayer } from '~/features/game-logic/types'
import { colors } from '~/features/ui/theme/colors.style'
import { SVG } from './styled'

type Props = {
  currentPlayer: CurrentPlayer
}

export const Octagon: FC<Props> = ({ currentPlayer }) => {
  return (
    <SVG width="197" height="165" viewBox="0 0 197 165" fill="none">
      <g filter="url(#filter0_d_5_5705)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 55.2795C3 47.2326 7.82258 39.9694 15.2389 36.8468L90.2793 5.25082C95.2186 3.17114 100.786 3.16075 105.733 5.22198L181.692 36.8718C189.145 39.9772 194 47.2593 194 55.3333V132C194 143.046 185.046 152 174 152H23C11.9543 152 3 143.046 3 132V55.2795Z"
          fill={
            currentPlayer === player1
              ? colors.accent.primary
              : colors.accent.secondary
          }
        />
        <path
          d="M14.6568 35.4643C6.68427 38.8212 1.5 46.6291 1.5 55.2795V132C1.5 143.874 11.1259 153.5 23 153.5H174C185.874 153.5 195.5 143.874 195.5 132V55.3333C195.5 46.6538 190.281 38.8255 182.269 35.4872L106.31 3.83737C100.992 1.62154 95.0069 1.63271 89.6972 3.86836L14.6568 35.4643Z"
          stroke="black"
          stroke-width="3"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_5_5705"
          x="0"
          y="0.683517"
          width="197"
          height="164.316"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5_5705"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_5_5705"
            result="shape"
          />
        </filter>
      </defs>
    </SVG>
  )
}
