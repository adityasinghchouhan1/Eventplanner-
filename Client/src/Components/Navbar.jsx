import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false)

  const ToggleButton = () => {
    setIsopen(!isOpen)
  }

  const CloseButton = () => {
    setIsopen(false)
  }
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-20 flex justify-between items-center px-4 py-8 bg-black/15 backdrop-blur-sm text-white">
        <div className=" text-2xl font-semibold text-white">MY LOgo</div>
        <ul className="hidden md:flex gap-12 font-bold">
          <li>
            <NavLink to="" onClick={CloseButton}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="About" onClick={CloseButton}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="Services" onClick={CloseButton}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="Contact" onClick={CloseButton}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div
          onClick={ToggleButton}
          className="md:hidden text-2xl cursor-pointer"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div
          className={`md:hidden fixed z-[9999] top-0 left-0 text-white h-full bg-transparent backdrop-blur-sm transition-all duration-300 overflow-hidden font-serif border-r-4 border-yellow-500 ${
            isOpen ? 'w-56' : 'w-0'
          }`}
        >
          <ul className="flex flex-col justify-center items-center gap-8 text-xl pt-16 text-center">
            <li className="hover:bg-slate-900 w-full py-2 transition-all duration-100">
              {' '}
              <NavLink to="" onClick={CloseButton}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="About" onClick={CloseButton}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="Services" onClick={CloseButton}>
                Services
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink to="Contact" onClick={CloseButton}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
