import { GoogleAuthProvider } from 'firebase/auth'

// Provider
export const googleProvider = new GoogleAuthProvider()

// Scopes
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile')
