import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import UpArrow from './utils/UpArrow'

const App = () => {
  return (
    <>
      <div className=" relative">
        <Navbar />
        <Outlet />
        <UpArrow />
        <Footer />
      </div>
    </>
  )
}

export default App
