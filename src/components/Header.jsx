import React from 'react'

export default function Header({ config }) {
  const { personal, navigation } = config

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">{personal.name}</a>
        <ul className="hidden md:flex space-x-8">
          {navigation.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-secondary hover:text-primary">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-secondary">☰</button>
      </nav>
    </header>
  )
}