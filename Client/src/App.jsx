import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import UpArrow from './utils/UpArrow'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  return (
    <>
      <div className=" relative">
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <UpArrow />
        <Footer />
      </div>
    </>
  )
}

export default App
