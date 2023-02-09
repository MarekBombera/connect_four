import { FC } from 'react'
import { player1 } from '~/features/game-logic/constants'
import { CellValue } from '~/features/game-logic/types'
import { colors } from '~/features/ui/theme/colors.style'
import { SVG } from './styled'

type Props = {
  cellValue: CellValue
  rowIndex: number
}

export const DiscIcon: FC<Props> = ({ cellValue, rowIndex }) => {
  const {
    accent: { primary, secondary },
  } = colors

  return (
    <SVG
      viewBox="0 0 70 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      rowIndex={rowIndex}
    >
      <g id="counter-red-large">
        <circle id="Oval Copy 41" cx="35" cy="35" r="35" fill="black" />
        <circle id="Oval Copy 42" cx="35" cy="40" r="35" fill="black" />
        <g id="Oval Copy 43" filter="url(#filter0_i_5_6366)">
          <circle
            cx="35"
            cy="35"
            r="32"
            fill={cellValue === player1 ? primary : secondary}
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_5_6366"
          x="3"
          y="3"
          width="64"
          height="64"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_5_6366"
          />
        </filter>
      </defs>
    </SVG>
  )
}
