import React, { useEffect, useRef } from 'react'
import img from '../../public/S2.webp'
import { gsap } from 'gsap'
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
      <div className="p-10">
        <img
          src={img}
          ref={imgRef}
          className=" object-fit-fill bg-center bg-cover"
        />
      </div>
    </>
  )
}

export default Testimonial
