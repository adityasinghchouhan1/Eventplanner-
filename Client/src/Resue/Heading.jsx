import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Heading = ({ title, discription }) => {
  const headingRef = useRef(null)
  useEffect(() => {
    const element = headingRef.current
    if (!element) return

    const ctx = gsap.context(() => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 70%',
          toggleActions: 'play reverse play reverse',
          markers: false,
        },
        x: -100, // animate from left to right
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }, headingRef)
    return () => ctx.revert()
  }, [])
  return (
    <>
      <div
        className="flex justify-center items-center flex-col text-center my-7 "
        ref={headingRef}
      >
        <h1 className="text-center text-6xl font-Yellowtail2">{title}</h1>
        <p className="text-center text-xs sm:text-sm mt-7 sm:px-60 px-5 font-Yellowtail text-gray-500">
          {discription}
        </p>
      </div>
    </>
  )
}

export default Heading
