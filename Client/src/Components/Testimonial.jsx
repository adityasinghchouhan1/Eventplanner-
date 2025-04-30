import React, { useEffect, useRef } from 'react'
import img from '../../public/S2.webp'
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
      <div className="flex justify-center items-center flex-col p-4">
        <Heading
          title={'Live your magic and save your precious memories!'}
          discription={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium  voluptatum commodi autem vitae fugit, architecto deserunt vel consectetur quisquam magnam suscipit. Deserunt, quod quas! Non culpa enim praesentium necessitatibus!'
          }
        />

        <div className="p-10">
          <img
            src={img}
            ref={imgRef}
            className=" object-fit-fill bg-center bg-cover"
          />
        </div>
        <Button title={'Click to See Servicrs'} />
      </div>
    </>
  )
}

export default Testimonial
