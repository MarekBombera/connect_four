import { NextPage } from 'next'
import { Board } from '~/components/board'
import { GameNavigation } from '~/components/game-navigation'

const MultiplayerLocalPage: NextPage = () => {
  return (
    <>
      <GameNavigation />
      <Board />
    </>
  )
}

export default MultiplayerLocalPage
