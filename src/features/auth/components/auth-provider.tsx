'use client'

import { useState } from 'react'
import SignInCard from './sign-in-card'
import SignUpCard from './sign-up-card'

export default function AuthProvider() {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400 px-4">
      {isSignIn ? (
        <SignInCard onSwitch={() => setIsSignIn(false)} />
      ) : (
        <SignUpCard onSwitch={() => setIsSignIn(true)} />
      )}
    </div>
  )
}
