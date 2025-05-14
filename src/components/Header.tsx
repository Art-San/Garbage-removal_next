'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Truck } from 'lucide-react'
import { menuItems } from '@/data/menu'
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
          {/* {menuItems.map((item) => (
            <Link key={item.id} href={item.href} className={item.className}>
              {item.name}
            </Link>
          ))} */}
          <a
            href="#services"
            className="text-gray-700 hover:text-[#3644b9] transition-colors font-medium"
          >
            Услуги
          </a>
          <a
            href="#process"
            className="text-gray-700 hover:text-[#3644b9] transition-colors font-medium"
          >
            Как мы работаем
          </a>
          <a
            href="#gallery"
            className="text-gray-700 hover:text-[#3644b9] transition-colors font-medium"
          >
            Галерея
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-[#3644b9] transition-colors font-medium"
          >
            Отзывы
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-[#3644b9] transition-colors font-medium"
          >
            Контакты
          </a>
        </nav>

        <a
          href="tel:+78001234567"
          className="hidden md:block px-5 py-2 bg-[#3644b9] text-white rounded-full font-medium hover:bg-[#2d399c] transition-colors"
        >
          8 (800) 123-45-67
        </a>

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
            <a
              href="#services"
              className="text-gray-700 hover:text-[#3644b9] transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a
              href="#process"
              className="text-gray-700 hover:text-[#3644b9] transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Как мы работаем
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-[#3644b9] transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Галерея
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-[#3644b9] transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#3644b9] transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <a
              href="tel:+78001234567"
              className="px-5 py-2 bg-[#3644b9] text-white rounded-full font-medium text-center hover:bg-[#2d399c] transition-colors"
            >
              8 (800) 123-45-67
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
