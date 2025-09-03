'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navigation = () => {
  const pathname = usePathname()
  const [isNavOpen, setIsNavOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home', number: '00' },
    { href: '/destination', label: 'Destination', number: '01' },
    { href: '/crew', label: 'Crew', number: '02' },
    { href: '/technology', label: 'Technology', number: '03' },
  ]

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header className="primary-header flex">
      <div>
        <Image
          src="/assets/shared/logo.svg"
          alt="space tourism logo"
          className="logo"
          width={48}
          height={48}
          priority
        />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isNavOpen}
        onClick={toggleNav}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible={isNavOpen}
          className="primary-navigation underline-indicators flex"
        >
          {navItems.map((item) => (
            <li key={item.href} className={pathname === item.href ? 'active' : ''}>
              <Link
                href={item.href}
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                onClick={() => setIsNavOpen(false)}
              >
                <span aria-hidden="true">{item.number}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation