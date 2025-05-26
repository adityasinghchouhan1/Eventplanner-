import React from 'react'
import Up from '../../public/Arrow.png'
const UpArrow = () => {
  return (
    <>
      <div
        className="border border-b-2 border-yellow-400 rounded-full w-12 h-12 z-50 fixed bottom-5 p-2 hover:bg-yellow-500 transition-all duration-300 right-5 cursor-pointer group"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img
          src={Up}
          alt="Up Arrow"
          className="bg-center rounded-full bg-cover bg-no-repeat border group-hover:scale-105  transition-all duration-300  border-yellow-400"
        />
      </div>
    </>
  )
}

export default UpArrow
