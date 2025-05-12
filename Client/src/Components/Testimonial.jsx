import React, { useEffect, useRef } from 'react'
import img from '../../public/S2.webp'
import logo from '../../public/Flower2.png'

import { gsap } from 'gsap'
import Heading from '../Resue/Heading'
import Button from '../Resue/Button'
const Testimonial = () => {
  const imgRef = useRef(null)
  useEffect(() => {
    const handleMouse = (e) => {
      const { clientX, clientY } = e
      const x = (clientX - window.innerWidth / 2) / 20
      const y = (clientY - window.innerHeight / 2) / 20
      gsap.to(imgRef.current, {
        x: x,
        y: y,
        duration: 0.5,
        ease: 'Power2.out',
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => {
      window.removeEventListener('mousemove', handleMouse)
    }
  })
  return (
    <>
      <div className="flex justify-center items-center flex-col pb-14 pt-10 px-4 bg-[#f4f0ed]">
        <Heading
          title={'Live your magic and save your precious memories!'}
          discription={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium  voluptatum commodi autem vitae fugit, architecto deserunt vel consectetur quisquam magnam suscipit. Deserunt, quod quas! Non culpa enim praesentium necessitatibus!'
          }
        />

        <div className="flex flex-wrap justify-between items-center w-full">
          <div className="w-full md:w-1/2 p-6 flex justify-center items-center">
            <img
              src={img}
              ref={imgRef}
              className=" object-fit-fill bg-center bg-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <p className="sm:text-lg  p-0 pb-5  sm:p-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              tempore consequatur autem nesciunt error earum, ipsam debitis
              molestiae doloribus possimus libero praesentium nemo dolor!
              {/* Mollitia, laudantium deserunt! Ipsum, doloremque aliquam? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quae dolore ab
              nobis, ullam veniam laboriosam praesentium est itaque ex minima,
              tenetur eum! Harum asperiores nostrum neque odio ex expedita
              corrupti. */}
            </p>
            <p className="sm:text-lg text-xs p-0 pt-5 sm:p-5 border-t-2 border-green-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              consectetur labore, fugiat veniam aliquam vitae repellendus,
              minima esse aut id, unde temporibus beatae nihil reprehenderit
              modi commodi totam. Ex provident, laborum consectetur esse nostrum
              voluptatibus vel ducimus ab sed doloremque inventore, soluta amet
              laudantium, rem quae fugit vero porro alias laboriosam? Quibusdam
              porro similique modi necessitatibus? Eos doloremque explicabo,
              rerum fugit, cumque aut, libero magnam quia voluptas tempore
              numquam odit asperiores culpa saepe minus ab nihil labore sed?
              Esse non ipsa culpa reiciendis. Sit eligendi nemo repellendus nam
              exercitationem quia expedita? Consequuntur et voluptas dolores,
            </p>
          </div>
        </div>
        <div className="flex me-10 sm:me-0">
          <img
            src={logo}
            className="w-[55px] bg-center bg-cover object-cover"
          />
          <Button title={'Click to See Servicrs'} />
        </div>
      </div>
    </>
  )
}

export default Testimonial
