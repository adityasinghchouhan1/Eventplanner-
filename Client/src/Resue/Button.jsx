import React from 'react'

const Button = ({ title, OnClick }) => {
  return (
    <button className="custom-button" onClick={OnClick}>
      {title}
    </button>
  )
}

export default Button
