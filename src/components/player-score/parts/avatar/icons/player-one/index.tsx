import { FC } from 'react'

import { SVG } from './styled'

export const PlayerOneIcon: FC = () => {
  return (
    <SVG width="54" height="59" viewBox="0 0 54 59" fill="none">
      <circle cx="27" cy="27" r="27" fill="#000" />
      <circle cx="27" cy="32" r="27" fill="#000" />
      <circle cx="27" cy="27" r="24" fill="#FD6687" />
      <g fill="#000">
        <path d="M45.25 25c0 7.4558-6.0442 13.5-13.5 13.5s-13.5-6.0442-13.5-13.5h3c0 5.799 4.701 10.5 10.5 10.5s10.5-4.701 10.5-10.5h3ZM30.75 17v5.9844h-3V17h3ZM40.75 17v5.9844h-3V17h3Z" />
      </g>
    </SVG>
  )
}
