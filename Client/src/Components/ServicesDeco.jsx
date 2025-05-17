import React, { useEffect, useRef } from 'react'
import logo from '../../public/Flower.png'
import Heading from '../Resue/Heading'
import CSimg from '../../public/Simgg.jpg'
import gsap from 'gsap'
import Button from '../Resue/Button'
import { useNavigate } from 'react-router-dom'
const ServicesDeco = () => {
  const ImgRef = useRef(null)
const navigate = useNavigate()
  useEffect(() => {
    const handlemouse = (e) => {
      const { clientX, clientY } = e
      const x = (clientX - window.innerWidth / 2) / 20
      const y = (clientY - window.innerHeight / 2) / 20

      gsap.to(ImgRef.current, {
        x: x,
        y: y,
        duration: 0.5,
        ease: 'power2.out',
      })
    }
    window.addEventListener('mousemove', handlemouse)
    return () => {
      window.removeEventListener('mousemove', handlemouse)
    }
  }, [])

  const OnhandleConnect = () => {
    navigate('/Contact')
  }
  return (
    <>
      <div className="flex justify-center items-center flex-col pb-16">
        <img src={logo} />
        <Heading
          title={'To Make Your Special Movement Amazing Contect With Us'}
          discription={'voluptas iste blanditiis nobis itaque magnam eos'}
        />
        <img
          src={CSimg}
          ref={ImgRef}
          className="my-14 sm:my-16 bg-center bg-cover bg-no-repeat object-fit-cover sm:p-0 p-5"
        />
        <Button title={'Planne your Events'} OnClick={OnhandleConnect} />
      </div>
    </>
  )
}

export default ServicesDeco
