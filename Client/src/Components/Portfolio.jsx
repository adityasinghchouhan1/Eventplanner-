import React from 'react'
import Heading from '../Resue/Heading'
import p from '../../public/p.jpg'
import p2 from '../../public/p2.jpg'
import p3 from '../../public/p3.jpg'
import p4 from '../../public/p4.jpg'

const Portfolio = () => {
  return (
    <>
      <div className="flex justify-center items-center sm:flex-col p-5">
        <Heading
          title={'Our Portfolio'}
          discription={
            'Our portfolio showcases our expertise in designing and planning unique and unforgettable weddings. From intimate celebrations to grand affairs, we create personalized experiences tailored to our clients vision and style. Our attention to detail and creativity are evident in every wedding we plan, ensuring a flawless and memorable experience for our clients and their guests.'
          }
        />
        <div className="relative flex flex-col justify-center items-center">
          <div className="flex ">
            <div className=" overflow-hidden hover:scale-90 duration-500 transition-all">
              <img
                src={p4}
                className="bg-center bg-cover hover:scale-125 duration-500 transition-all"
              />
              <h1 className=" font-inter text-2xl text-gray-600 uppercase mt-2">
                Our Portfolio
              </h1>
              <p2 className=" font-Yellowtail2 text-xs text-gray-500">
                ensuring a flawless and memorable experience for our clients and
                their guests.
              </p2>
            </div>
            <div className=" overflow-hidden hover:scale-90 duration-500 transition-all">
              <img
                src={p}
                className="bg-center bg-cover hover:scale-125 duration-500 transition-all"
              />
              <h1 className=" font-inter text-2xl text-gray-600 uppercase mt-2">
                Our Portfolio
              </h1>
              <p2 className=" font-Yellowtail2 text-xs text-gray-500">
                ensuring a flawless and memorable experience for our clients and
                their guests.
              </p2>
            </div>
          </div>
          <div className="flex">
            <div className=" overflow-hidden hover:scale-90 duration-500 transition-all">
              <img
                src={p2}
                className="bg-center bg-cover hover:scale-125 duration-500 transition-all"
              />
              <h1 className=" font-inter text-2xl text-gray-600 uppercase mt-2">
                Our Portfolio
              </h1>
              <p2 className=" font-Yellowtail2 text-xs text-gray-500">
                ensuring a flawless and memorable experience for our clients and
                their guests.
              </p2>
            </div>
            <div className=" overflow-hidden hover:scale-90 duration-500 transition-all">
              <img
                src={p3}
                className="bg-center bg-cover hover:scale-125 duration-500 transition-all"
              />
              <h1 className=" font-inter text-2xl text-gray-600 uppercase mt-2">
                Our Portfolio
              </h1>
              <p2 className=" font-Yellowtail2 text-xs text-gray-500">
                ensuring a flawless and memorable experience for our clients and
                their guests.
              </p2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
