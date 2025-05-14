'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Truck } from 'lucide-react'
import { menuItems, mobMenuItems } from '@/data/menu'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Truck className="h-8 w-8 text-[#3644b9]" />
          <span className="ml-2 text-xl font-bold text-[#3644b9]">
            ЧистоСтрой
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link key={item.id} href={item.href} className={item.className}>
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="tel:+78001234567"
          className="hidden md:block px-5 py-2 bg-[#3644b9] text-white rounded-full font-medium hover:bg-[#2d399c] transition-colors"
        >
          8 (800) 123-45-67
        </Link>

        <button
          className="md:hidden text-[#3644b9]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {mobMenuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={item.className}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="tel:+78001234567"
              className="px-5 py-2 bg-[#3644b9] text-white rounded-full font-medium text-center hover:bg-[#2d399c] transition-colors"
            >
              8 (800) 123-45-67
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
