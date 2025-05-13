import React, { useState } from 'react'
import logo from '../../public/Flower.png'
import Heading from '../Resue/Heading'
import Button from '../Resue/Button'
import axios from 'axios'
import SummaryApi from '../Common/SummaryApi'
const ContectForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    date: '',
    number: '',
    msg: '',
  })
  const [error, setError] = useState()
  const [success, setSuccess] = useState()

  const datahandle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async () => {
    try {
      console.log(data)
      const res = await axios.post(SummaryApi.Contect.url, data)
      console.log('POST request successful')
      if (res.status === 200) {
        setSuccess('Message sent successfully!')
        setData({ name: '', email: '', date: '', number: '', msg: '' })
      }
    } catch (err) {
      console.error(err)
      setError('Failed to send message')
    }
  }

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
          name="name"
          value={data.name}
          onChange={datahandle}
        />
        <input
          placeholder="E-MAIL"
          className="p-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none"
          name="email"
          value={data.email}
          onChange={datahandle}
        />
        <input
          placeholder="PHONE NUMBER"
          className="p-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none"
          name="number"
          value={data.number}
          onChange={datahandle}
        />
        <input
          type="date"
          className="p-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none"
          name="date"
          value={data.date}
          onChange={datahandle}
        />
        <textarea
          placeholder="Tell us more about your event..."
          className="p-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none resize-none"
          rows={4}
          name="msg"
          value={data.msg}
          onChange={datahandle}
        ></textarea>
        <Button title={'SEND'} OnClick={handleSubmit} />
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </div>
    </div>
  )
}

export default ContectForm
