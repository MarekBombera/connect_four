import { useEffect, useState } from 'react'

export const DEFAULT_TURN_TIME = 30

export const usePlayerTurnTimer = (initialTime = DEFAULT_TURN_TIME) => {
  const [turnTimer, setTurnTimer] = useState<number>(initialTime)

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined

    if (turnTimer === 0) {
      setTurnTimer(initialTime)
    }

    timer = setInterval(() => {
      setTurnTimer((time) => time - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [initialTime, turnTimer])

  const isTimeUp = turnTimer === 0

  return { turnTimer, setTurnTimer, isTimeUp }
}
