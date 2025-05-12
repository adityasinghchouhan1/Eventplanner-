import React from 'react'
import Wrapper from '../Resue/Wrapper'
import Simg from '../../public/Simg.webp'
import ServicesCard from './ServicesCard'
const Services = () => {
  return (
    <>
      <div>
        <Wrapper wimg={Simg} title={'Our Services & Process'} />
        <ServicesCard />
      </div>
    </>
  )
}

export default Services
