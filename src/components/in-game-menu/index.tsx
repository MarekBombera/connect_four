import { forwardRef } from 'react'
import { Modal } from '~/features/ui/components/modal'
import { Continue, Quit, Restart, StyleGameMenu, Title } from './styled'

type Props = {
  closeModal: () => void
}

export const InGameMenu = forwardRef<HTMLDivElement, Props>(
  ({ closeModal }, ref) => {
    return (
      <Modal ref={ref} closeModal={closeModal}>
        <StyleGameMenu>
          <Title>Pause</Title>
          <Continue onClick={closeModal}>Continue game</Continue>
          <Restart onClick={() => {}}>Restart</Restart>
          <Quit>Quit game</Quit>
        </StyleGameMenu>
      </Modal>
    )
  }
)

InGameMenu.displayName = 'InGameMenu'
