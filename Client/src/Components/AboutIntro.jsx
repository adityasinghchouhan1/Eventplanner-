import { useEffect, useRef } from 'react'
import React from 'react'
import gsap from 'gsap'
import introimg from '../../public/Simg3.jpeg'

const AboutIntro = () => {
  const comp = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from('#intro-slider', {
        xPercent: '-100',
        duration: 1.3,
        delay: 0.3,
      })
        .from(['#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          y: '+=30',
          stagger: 0.5,
        })
        .to(['#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          y: '-=30',
          delay: 0.3,
          stagger: 0.5,
        })
        .to('#intro-slider', {
          xPercent: '-100',
          duration: 1.3,
        })
    }, comp)
    return () => ctx.revert()
  }, [])
  return (
    <>
      <div className="relative" ref={comp}>
        <div
          className="h-screen p-10 bg-gray-50  absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight"
          id="intro-slider"
        >
          <h1 className="sm:text-8xl text-6xl" id="title-1">
            Live your magic
          </h1>
          <h1 className="sm:text-8xl text-6xl" id="title-2">
            and save your precious memories!
          </h1>
          <h1 className="sm:text-8xl text-7xl font-bold" id="title-3">
            Destination Wedding
          </h1>
        </div>
        <div
          className="h-screen flex bg-gray-950 justify-center place-items-center bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${introimg})` }}
        >
          <h1
            className="sm:text-9xl text-6xl text-center font-Roboto text-gray-100 text-shadow-2xl"
            id="Welcome"
          >
            Movement Creater
          </h1>
        </div>
      </div>
    </>
  )
}

export default AboutIntro
