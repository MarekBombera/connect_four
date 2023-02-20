'use client'

import type { User } from 'firebase/auth'
import { FC, useState } from 'react'
import { AvatarPlaceholder } from './icons/avatar-placeholder'
import { Dropdown } from './parts/dropdown'
import { Img, StyledAvatar } from './styled'

type Props = {
  user: User
}

export const Avatar: FC<Props> = ({ user }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const { photoURL } = user

  const toggleDropdown = () => setShowDropdown(!showDropdown)

  return (
    <>
      <StyledAvatar onClick={toggleDropdown}>
        {photoURL ? (
          <Img src={photoURL} width={100} height={100} alt="Profile img" />
        ) : (
          <AvatarPlaceholder />
        )}
      </StyledAvatar>
      {showDropdown && <Dropdown />}
    </>
  )
}
