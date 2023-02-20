import type { User } from 'firebase/auth'
import { useEffect, useState } from 'react'

import { signInWithPopup } from 'firebase/auth'
import { authProviders } from '~/firebase/auth/providers'
import { auth } from '~/firebase/auth'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signInWithGoogle = () => {
    return signInWithPopup(auth, authProviders.google)
  }

  const signOut = () => {
    return auth.signOut()
  }

  return { user, loading, signInWithGoogle, signOut }
}
