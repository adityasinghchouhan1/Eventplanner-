import React from 'react'
import Wrapper from '../Resue/Wrapper'
import Wimg from '../../public/Simg2.jpg'
import Fcon from './ContectForm'
const Contact = () => {
  return (
    <>
      <div>
        <Wrapper wimg={Wimg} title={'Contect Us'} />
        <Fcon />
      </div>
    </>
  )
}

export default Contact
