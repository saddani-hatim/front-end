import Link from 'next/link'
import React from 'react'

export default function LogoAndMenuItems() {
  const menuItems = [
    { name: 'MEN', href: '/category/men' },
    { name: 'WOMEN', href: '/category/women' },
    { name: 'KIDS', href: '/category/kids' },
    { name: 'HOME & LIVING', href: '/category/home-living' },
    { name: 'BEAUTY', href: '/category/beauty' },
    { name: 'STUDIO', href: '/category/studio' },
  ];

  return (
    <div className="flex items-center gap-4 md:gap-8">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="relative">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary 
            flex items-center justify-center text-white font-bold text-lg md:text-xl
            shadow-glow group-hover:shadow-glow-lg transition-all duration-300
            group-hover:scale-105">
            S
          </div>
        </div>
        <span className="hidden md:block text-xl font-bold bg-gradient-to-r from-primary-light to-secondary-light 
          bg-clip-text text-transparent">
          StyleStore
        </span>
      </Link>

      {/* Menu Items */}
      <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="relative px-3 py-2 text-sm font-medium text-slate-300 
                hover:text-white transition-all duration-300
                group"
            >
              {item.name}
              {/* Animated underline */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                bg-gradient-to-r from-primary to-secondary
                group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="lg:hidden p-2 text-slate-300 hover:text-white 
        hover:bg-dark-700 rounded-lg transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  )
}
