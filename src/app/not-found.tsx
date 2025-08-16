'use client'

import { useRouter } from 'next/navigation'
import { Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-8">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Button
        onClick={() => router.push('/')}
        className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-6 py-3"
      >
        <Home className="w-5 h-5 text-blue-600" />
        Back to Home
      </Button>
    </div>
  )
}
