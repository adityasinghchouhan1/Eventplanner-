import React from 'react'
import logo from '../../public/Flower.png'
import Heading from '../Resue/Heading'
import Button from '../Resue/Button'

const ContectForm = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Heading
        title={'GET IN TOUCH'}
        discription={'For Events as Unique as You'}
      />
      <img
        src={logo}
        className="bg-center bg-cover object-cover"
        alt="Flower"
      />

      <div className="flex flex-col gap-6 mt-14 p-5 pb-10 w-full max-w-2xl">
        <input
          placeholder="NAME"
          className="p-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none"
        />
        <input
          placeholder="E-MAIL"
          className="p-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none"
        />
        <input
          placeholder="PHONE NUMBER"
          className="p-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none"
        />
        <input
          type="date"
          className="p-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none"
        />
        <textarea
          placeholder="Tell us more about your event..."
          className="p-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none resize-none"
          rows={4}
        ></textarea>
        <Button title={'SEND'} />
      </div>
    </div>
  )
}

export default ContectForm
