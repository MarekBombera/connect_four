import { FC, SVGProps } from 'react'

export const Logo: FC = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="58" height="61" viewBox="0 0 58 61" fill="none" {...props}>
      <g filter="url(#a)">
        <circle cx="13" cy="13" r="10" fill="#FD6687" />
        <circle cx="13" cy="13" r="11.5" stroke="#000" strokeWidth="3" />
      </g>
      <g filter="url(#b)">
        <circle cx="45" cy="45" r="10" fill="#FD6687" />
        <circle cx="45" cy="45" r="11.5" stroke="#000" strokeWidth="3" />
      </g>
      <g filter="url(#c)">
        <circle cx="45" cy="13" r="10" fill="#FFCE67" />
        <circle cx="45" cy="13" r="11.5" stroke="#000" strokeWidth="3" />
      </g>
      <g filter="url(#d)">
        <circle cx="13" cy="45" r="10" fill="#FFCE67" />
        <circle cx="13" cy="45" r="11.5" stroke="#000" strokeWidth="3" />
      </g>
      <defs>
        <filter
          id="a"
          x="0"
          y="0"
          width="26"
          height="29"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5_5567"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_5_5567"
            result="shape"
          />
        </filter>
        <filter
          id="b"
          x="32"
          y="32"
          width="26"
          height="29"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5_5567"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_5_5567"
            result="shape"
          />
        </filter>
        <filter
          id="c"
          x="32"
          y="0"
          width="26"
          height="29"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5_5567"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_5_5567"
            result="shape"
          />
        </filter>
        <filter
          id="d"
          x="0"
          y="32"
          width="26"
          height="29"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5_5567"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_5_5567"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
