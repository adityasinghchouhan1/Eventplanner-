import React from 'react'

const Heading = ({ title, discription }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col text-center">
        <h1 className="text-center text-4xl">{title}</h1>
        <p className="text-center text-xs mt-7 sm:px-60 px-5 ">{discription}</p>
      </div>
    </>
  )
}

export default Heading
