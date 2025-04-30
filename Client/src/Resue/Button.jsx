import React from 'react'

const Button = ({ title, OnClick }) => {
  return (
    <>
      <button
        className="border border-black py-2 px-4 hover:border-yellow-200 transition-all"
        onClick={OnClick}
      >
        {title}
      </button>
    </>
  )
}

export default Button
