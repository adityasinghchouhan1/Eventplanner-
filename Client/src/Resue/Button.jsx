import React from 'react'

const Button = ({ title, OnClick }) => {
  return (
    <>
      <button onClick={OnClick}>{title}</button>
    </>
  )
}

export default Button
