import React, { useState } from 'react'
import { FaBars, FaEnvelope } from 'react-icons/fa'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  const ToggleOpenClose = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    {
      name: 'Contact',
      icon: <FaEnvelope />,
      path: 'contect',
    },
    {name:'Slider',
    icon:<FaEnvelope/>,
          path: 'slider',

  }
    // Add more menu items here
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'w-60' : 'w-16'
        } bg-blue-950 text-white transition-all duration-300 ease-in-out shadow-lg flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-yellow-900">
          {isOpen && (
            <h1 className="text-2xl font-bold tracking-wide text-yellow-400">
              Admin
            </h1>
          )}
          <button onClick={ToggleOpenClose} className="ml-auto">
            <FaBars size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 mt-6 px-2 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-blue-800 ${
                location.pathname.includes(item.path)
                  ? 'bg-yellow-600 text-white shadow-md'
                  : ''
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {isOpen && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isOpen ? 'ml-16' : 'ml-20'
        }`}
      >
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Sidebar
