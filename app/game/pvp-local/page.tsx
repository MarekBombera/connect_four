import { NextPage } from 'next'
import { Board } from '~/components/board'
import { GameNavigation } from '~/components/game-navigation'

const PvpLocalPage: NextPage = () => {
  return (
    <>
      <GameNavigation />
      <Board />
    </>
  )
}

export default PvpLocalPage
