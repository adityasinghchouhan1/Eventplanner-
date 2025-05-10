import React from 'react'

const Wrapper = ({ wimg, title }) => {
  return (
    <>
      <div className="px-10 py-2 ">
        <div
          style={{ backgroundImage: `url(${wimg})` }}
          className="bg-center object-fit-contain bg-no-repeat flex justify-center items-center h-[80vh]"
        >
          <div
            className="text-6xl font-Yellowtail2 text-white uppercase tracking-widest
 [word-spacing:20px]"
          >
            {title}
          </div>
        </div>
      </div>
    </>
  )
}

export default Wrapper
