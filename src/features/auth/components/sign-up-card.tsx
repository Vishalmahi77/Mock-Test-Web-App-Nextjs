'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'

interface SignUpCardProps {
  onSwitch: () => void
}

export default function SignUpCard({ onSwitch }: SignUpCardProps) {
  return (
    <Card className="w-full max-w-md shadow-lg border border-blue-200">
      <CardHeader>
        <CardTitle className="text-center text-blue-600 text-2xl font-bold">
          Get Ready to Score?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="text"
          placeholder="Full Name"
          className="border-blue-300 focus-visible:ring-blue-500"
        />
        <Input
          type="email"
          placeholder="Email"
          className="border-blue-300 focus-visible:ring-blue-500"
        />
        <Input
          type="password"
          placeholder="Password"
          className="border-blue-300 focus-visible:ring-blue-500"
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          className="border-blue-300 focus-visible:ring-blue-500"
        />

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Sign Up
        </Button>

        <div className="flex items-center justify-center gap-4 mt-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 border-blue-500 text-blue-600 hover:bg-blue-50"
          >
            <FaFacebookF /> Facebook
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-blue-500 text-blue-600 hover:bg-blue-50"
          >
            <FaGoogle /> Google
          </Button>
        </div>

        <p className="text-center text-sm text-gray-700 mt-4">
          Already have an account?{' '}
          <button
            onClick={onSwitch}
            className="text-blue-600 hover:underline font-medium"
          >
            Sign In
          </button>
        </p>
      </CardContent>
    </Card>
  )
}
