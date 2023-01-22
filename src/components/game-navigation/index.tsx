'use client'

import { FC } from 'react'
import { Logo } from '~/features/ui/components/logo'
import { useModal } from '~/features/ui/components/modal/hooks/use-modal'
import { InGameMenu } from '../in-game-menu'
import { MenuButton, RestartButton, StyledGameNavigation } from './styled'

type Props = {}

export const GameNavigation: FC<Props> = ({}) => {
  const { modalRef, isModalOpen, openModal, closeModal } = useModal({})

  return (
    <StyledGameNavigation>
      {isModalOpen && <InGameMenu ref={modalRef} closeModal={closeModal} />}
      <MenuButton onClick={openModal}>Menu</MenuButton>
      <Logo />
      <RestartButton>Restart</RestartButton>
    </StyledGameNavigation>
  )
}
