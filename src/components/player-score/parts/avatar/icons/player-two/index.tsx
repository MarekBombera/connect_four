import { FC } from 'react'

import { SVG } from './styled'

export const PlayerTwoIcon: FC = () => {
  return (
    <SVG width="54" height="59" viewBox="0 0 54 59" fill="none">
      <circle r="27" transform="matrix(-1 0 0 1 27 27)" fill="#000" />
      <circle r="27" transform="matrix(-1 0 0 1 27 32)" fill="#000" />
      <circle r="24" transform="matrix(-1 0 0 1 27 27)" fill="#FFCE67" />
      <g fill="#000">
        <path d="M8.75 25c0 7.4558 6.0442 13.5 13.5 13.5s13.5-6.0442 13.5-13.5h-3c0 5.799-4.701 10.5-10.5 10.5s-10.5-4.701-10.5-10.5h-3ZM23.25 17v5.9844h3V17h-3ZM13.25 17v5.9844h3V17h-3Z" />
      </g>
    </SVG>
  )
}
