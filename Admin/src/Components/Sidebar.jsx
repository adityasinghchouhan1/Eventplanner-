import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Outlet, Link, Links } from 'react-router-dom'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ToggleOpenClose = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="flex bg-gray-400 h-screen">
        <aside
          className={`${
            isOpen ? 'w-16' : 'w-64'
          } fixed transition-all duration-300 h-gull bg-blue-950 border-r-4 border-yellow-900`}
        >
          <div className="">
            {!isOpen && (
              <div className="text-3xl font-semibold w-full text-center">
                ADMIN
              </div>
            )}
            <button onClick={ToggleOpenClose}>
              <FaBars size={20} />
            </button>
          </div>
          <nav className="mt-8">
            <Links to="contect"></Links>
          </nav>
        </aside>
        <div
          className={`${
            isOpen ? 'ml-60' : 'ml-16'
          } transition-all duration-300  h-full`}
        >
          <mian className="mt-6">
            <Outlet />
          </mian>
        </div>
      </div>
    </>
  )
}

export default Sidebar
