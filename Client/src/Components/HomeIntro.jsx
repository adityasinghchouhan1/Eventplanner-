import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '../../public/Flower.png'

gsap.registerPlugin(ScrollTrigger)

const HomeIntro = () => {
  const comp = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = comp.current.querySelector('#intro')
      const texts = comp.current.querySelectorAll('#T-1, #T-2, #T-3')

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          start: 'top top',
          end: '+=2000',
          scrub: 1,
          pin: true,
        },
      })

      t1.from(intro, {
        xPercent: -100,
        duration: 1.3,
        delay: 0.3,
      })
        .from(texts, {
          opacity: 0,
          y: 30,
          stagger: 0.5,
        })
        .to(texts, {
          opacity: 0,
          y: -30,
          delay: 0.3,
          stagger: 0.5,
        })
        .to(intro, {
          xPercent: -100,
          duration: 1.3,
        })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative" ref={comp}>
      <div
        className="tracking-tight absolute z-10 h-screen w-full top-0 sm:gap-10 gap-14 left-0 flex flex-col justify-center items-center bg-pink-100 text-center"
        id="intro"
      >
        <h2 className="sm:text-7xl text-6xl font-Roboto text-rose-600" id="T-1">
          You<span className="font-semibold font-Roboto">R</span> dr
          <span className="font-semibold font-Roboto">E</span>a
          <span className="font-semibold font-Roboto">W</span> w
          <span className="font-semibold font-Roboto">E</span>d
          <span className="font-semibold font-Roboto">D</span>in
          <span className="font-semibold font-Roboto">G</span>
        </h2>

        <h1
          className="flex flex-col justify-center items-center gap-10"
          id="T-2"
        >
          <img
            src={logo}
            className="w-52 bg-center object-fit-cover bg-cover"
          />
          <h2 className="sm:text-2xl text-sm font-Yellowtail font-semibold text-rose-600">
            Crafted with Love & Elegance
          </h2>
        </h1>
        <h2 className="sm:text-5xl text-3xl font-Roboto text-rose-600" id="T-3">
          Begin Your Forever With Us
        </h2>
      </div>
      <div className="h-screen w-full flex justify-center items-center p-5 bg-white">
        <h1 className="font-semibold font-Roboto sm:text-8xl text-4xl text-center text-gray-800">
          Welcome to Eternal Bliss Planners
        </h1>
      </div>
    </div>
  )
}

export default HomeIntro
