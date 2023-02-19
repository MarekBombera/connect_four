import { useEffect, useState } from 'react'

export const DEFAULT_TURN_TIME = 30

export const usePlayerTurnTimer = (initialTime = DEFAULT_TURN_TIME) => {
  const [turnTimer, setTurnTimer] = useState<number>(initialTime)
  const isTimerZero = turnTimer === 0

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined

    if (isTimerZero) {
      setTurnTimer(initialTime)
    }

    timer = setInterval(() => {
      setTurnTimer((time) => time - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [initialTime, isTimerZero])

  return { turnTimer, setTurnTimer, isTimerZero }
}
