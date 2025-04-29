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
      <nav className="flex justify-between items-center p-4 relative bg-transparent">
        <div className="text-white text-2xl font-semibold">MY LOgo</div>
        <ul className="hidden md:flex text-white gap-6">
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
          className="md:hidden text-2xl cursor-pointer text-white"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div
          className={`md:hidden fixed top-0 left-0 text-white  h-full bg-black transition-all duration-300  overflow-hidden font-serif  ${
            isOpen ? 'w-64' : 'w-0'
          }`}
        >
          <ul className="flex flex-col justify-center items-center gap-8 text-xl pt-10 text-center">
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
