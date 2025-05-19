import React from 'react'
import Slider from './Slider'
import Testimonial from './Testimonial'
import Portfolio from './Portfolio'
import HomeIntro from './HomeIntro'

const Home = () => {
  return (
    <>
      <div>
        <Slider />
        <Testimonial />
        <HomeIntro/>
        <Portfolio />
      </div>
    </>
  )
}

export default Home
