import React from 'react'
import logo from '../../public/Flower.png'
import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      <div className="bg-[#14081c] px-6 pt-8  w-full flex flex-col justify-center items-center text-white font-Roboto">
        <div className="flex flex-col sm:flex-row justify-around items-center w-full gap-7 sm:gap-0">
          <div className="flex flex-col justify-start text-start items-center sm:items-start text-lg">
            <p> Address :-123 dfg ghjhij hgfty</p>
            <p>State :- mp hhjiu</p>
            <p>2345678</p>
          </div>
          <div className="flex flex-col justify-start text-start items-start text-lg">
            <Link to="/About">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Contect">Contect</Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              src={logo}
              className=" object-fit-cover bg-center bg-no-repeat w-36"
            />
            <div className="text-sm font-serif font-bold mb-2">
              Our Social Media Handle
            </div>
            <div className="flex gap-5 text-xl">
              <a
                href="#"
                className="hover:text-[#3b5998] transition-all duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-[#1DA1F2] transition-all duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-[#E1306C] transition-all duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-[#0077B5] transition-all duration-200"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full m-5 flex justify-center items-center bg-white text-gray-500 py-2 rounded-sm">
          All Rights @EventManagment Pvt Lmt
        </div>
      </div>
    </>
  )
}

export default Footer
