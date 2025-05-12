import React from 'react'
import Wrapper from '../Resue/Wrapper'
import Simg from '../../public/Simg.webp'
import ServicesCard from './ServicesCard'
import ServicesDeco from './ServicesDeco'
const Services = () => {
  return (
    <>
      <div>
        <Wrapper wimg={Simg} title={'Our Services & Process'} />
        <ServicesCard />
        <ServicesDeco />
      </div>
    </>
  )
}

export default Services
