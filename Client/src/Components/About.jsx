import React from 'react'
import Wrapper from '../Resue/Wrapper'
import aboutW from '../../public/wapper2.jpg'
import HowWeAre from './HowWeAre'
const About = () => {
  return (
    <>
      <div>
        <Wrapper wimg={aboutW} title={'About us'} />
        <HowWeAre />
      </div>
    </>
  )
}

export default About
