'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Exams', href: '/exams' },
    { name: 'Services', href: '/services' },
    { name: 'Get Started', href: '/get-started' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MockTest
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black hover:text-blue-600 font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Login Button */}
            <Link href="/auth">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 cursor-pointer"
              >
                Login
              </Button>
            </Link>

            {/* Free Demo Button */}
            <Link href="/demo">
              <Button className="bg-blue-800 hover:bg-blue-900 text-white cursor-pointer">
                Free Demo
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Login */}
            <Link href="/auth" onClick={() => setIsOpen(false)}>
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 cursor-pointer"
              >
                Login
              </Button>
            </Link>

            {/* Mobile Free Demo */}
            <Link href="/demo" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white cursor-pointer">
                Free Demo
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
