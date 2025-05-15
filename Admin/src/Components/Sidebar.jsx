import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ToggleOpenClose = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="flex bg-gray-100 h-screen">
        <aside
          className={`${
            isOpen ? 'w-52' : 'w-16'
          } fixed transition-all duration-300 h-full bg-blue-950 border-r-4 border-yellow-900`}
        >
          <div className="">
            {isOpen && (
              <div className="text-3xl font-semibold w-full text-center">
                ADMIN
              </div>
            )}
            <button
              onClick={ToggleOpenClose}
              className="text-white p-2 ml-4 mt-4"
            >
              <FaBars size={20} />
            </button>
          </div>
          <nav className="mt-8 flex flex-col items-start pl-4 text-white">
            {isOpen && (
              <Link to="contect" className="mb-4 hover:underline">
                Contact
              </Link>
            )}
          </nav>
        </aside>
        <div
          className={`${
            isOpen ? 'ml-60' : 'ml-16'
          } transition-all duration-300  h-[100vh]`}
        >
          <main className="mt-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default Sidebar
