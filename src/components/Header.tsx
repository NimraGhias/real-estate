'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Listings', href: '#listings' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
              scrolled ? 'bg-gray-900' : 'bg-white/20 backdrop-blur-sm'
            }`}>
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              EstateHub
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button className={`px-4 py-2 text-sm font-medium transition-colors ${
              scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'
            }`}>
              Sign In
            </button>
            <button className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all ${
              scrolled
                ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/20'
                : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg shadow-black/10'
            }`}>
              Get Started
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
            aria-label="Menu"
          >
            <svg className={`w-6 h-6 transition-colors ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button className="w-full py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50">
                Sign In
              </button>
              <button className="w-full py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
