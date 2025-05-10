import React from 'react'
import { useNavigate } from 'react-router-dom'
import Heading from '../Resue/Heading'
import p from '../../public/p.jpg'
import p2 from '../../public/p2.jpg'
import p3 from '../../public/p3.jpg'
import p4 from '../../public/p4.jpg'
import Button from '../Resue/Button'

const Portfolio = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/Contact')
  }
  return (
    <>
      <div className="flex justify-center items-center flex-col  p-5">
        <Heading
          title={'Our Portfolio'}
          discription={
            'Our portfolio showcases our expertise in designing and planning unique and unforgettable weddings. From intimate celebrations to grand affairs, we create personalized experiences tailored to our clients vision and style. Our attention to detail and creativity are evident in every wedding we plan, ensuring a flawless and memorable experience for our clients and their guests.'
          }
        />
        <div className="relative flex flex-col justify-center items-center my-6">
          <div className="flex sm:flex-row flex-col justify-around gap-5 items-center">
            <div className=" group w-full md:w-1/2  overflow-hidden hover:scale-90 duration-500 transition-all">
              <img
                src={p4}
                className="w-[400px] z-0 object-cover bg-center bg-cover group-hover:scale-125 duration-500 transition-all"
              />
              <div className=" text-gray-500 group-hover:text-white group-hover:bg-black/25 duration-500 transition-all p-1">
                <h1 className="z-20 relative font-inter text-2xl uppercase mt-2 group-hover:font-semibold duration-500 transition-all">
                  Our Portfolio
                </h1>
                <p className="z-20 relative font-Yellowtail2 text-xs ">
                  ensuring a flawless and memorable experience for our clients
                  and their guests.
                </p>
              </div>{' '}
            </div>
            <div className="group w-full md:w-1/2 overflow-hidden hover:scale-90 duration-500 transition-all">
              <img
                src={p}
                className="w-[500px] z-0 object-cover bg-center bg-cover group-hover:scale-125 duration-500 transition-all"
              />
              <div className=" text-gray-500 group-hover:text-white group-hover:bg-black/25 duration-500 transition-all p-1">
                <h1 className="z-20 relative font-inter text-2xl uppercase mt-2 group-hover:font-semibold duration-500 transition-all">
                  Our Portfolio
                </h1>
                <p className="z-20 relative font-Yellowtail2 text-xs">
                  ensuring a flawless and memorable experience for our clients
                  and their guests.
                </p>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col justify-around gap-10 items-center">
            <div className="group z-0 w-full md:w-1/2 overflow-hidden hover:scale-90 duration-500 transition-all">
              <img
                src={p3}
                className="w-[400px] object-cover bg-center bg-cover group-hover:scale-125 duration-500 transition-all"
              />
              <div className=" text-gray-500 group-hover:text-white group-hover:bg-black/25 duration-500 transition-all p-1">
                <h1 className="z-20 relative font-inter text-2xl uppercase mt-2 group-hover:font-semibold duration-500 transition-all">
                  Our Portfolio
                </h1>
                <p className="z-20 relative font-Yellowtail2 text-xs">
                  ensuring a flawless and memorable experience for our clients
                  and their guests.
                </p>
              </div>
            </div>
            <div className="group w-full md:w-1/2 overflow-hidden hover:scale-90 duration-500 transition-all p-2">
              <img
                src={p2}
                className="z-0 w-[400px] sm:w-[300px] object-cover bg-center bg-cover group-hover:scale-125 duration-500 transition-all"
              />
              <div className=" text-gray-500 group-hover:text-white group-hover:bg-black/25 duration-500 transition-all p-1">
                <h1 className="z-20 relative font-inter text-2xl uppercase mt-2 group-hover:font-semibold duration-500 transition-all">
                  Our Portfolio
                </h1>
                <p className="z-20 relative font-Yellowtail2 text-xs">
                  ensuring a flawless and memorable experience for our clients
                  and their guests.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button OnClick={handleNavigate} title={'Contect with Us'} />
      </div>
    </>
  )
}

export default Portfolio
