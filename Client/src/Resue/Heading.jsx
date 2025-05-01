import React from 'react'

const Heading = ({ title, discription }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col text-center my-7">
        <h1 className="text-center text-6xl font-Yellowtail2">{title}</h1>
        <p className="text-center text-xs sm:text-sm mt-7 sm:px-60 px-5 font-Yellowtail text-gray-500">
          {discription}
        </p>
      </div>
    </>
  )
}

export default Heading
