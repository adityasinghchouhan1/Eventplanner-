import React from 'react'
import Heading from '../Resue/Heading'
import Slogo from '../../public/our-services-icon-2.png'
const ServicesCard = () => {
  const carddata = [
    {
      slogo: Slogo,
      Sname: 'Wedding Advisement',
      Sprocess:
        'Discover the Path to Your Perfect Union: Allow us to assist you in planning your dream wedding. Our team of experts will provide valuable advice and support, ensuring that every detail is handled for a truly magnificent celebration.',
    },
    {
      slogo: Slogo,
      Sname: 'Wedding Advisement',
      Sprocess:
        'Discover the Path to Your Perfect Union: Allow us to assist you in planning your dream wedding. Our team of experts will provide valuable advice and support, ensuring that every detail is handled for a truly magnificent celebration.',
    },
    {
      slogo: Slogo,
      Sname: 'Wedding Advisement',
      Sprocess:
        'Discover the Path to Your Perfect Union: Allow us to assist you in planning your dream wedding. Our team of experts will provide valuable advice and support, ensuring that every detail is handled for a truly magnificent celebration.',
    },
    {
      slogo: Slogo,
      Sname: 'Wedding Advisement',
      Sprocess:
        'Discover the Path to Your Perfect Union: Allow us to assist you in planning your dream wedding. Our team of experts will provide valuable advice and support, ensuring that every detail is handled for a truly magnificent celebration.',
    },
    {
      slogo: Slogo,
      Sname: 'Wedding Advisement',
      Sprocess:
        'Discover the Path to Your Perfect Union: Allow us to assist you in planning your dream wedding. Our team of experts will provide valuable advice and support, ensuring that every detail is handled for a truly magnificent celebration.',
    },
    {
      slogo: Slogo,
      Sname: 'Wedding Advisement',
      Sprocess:
        'Discover the Path to Your Perfect Union: Allow us to assist you in planning your dream wedding. Our team of experts will provide valuable advice and support, ensuring that every detail is handled for a truly magnificent celebration.',
    },
    {
      slogo: Slogo,
      Sname: 'Wedding Advisement',
      Sprocess:
        'Discover the Path to Your Perfect Union: Allow us to assist you in planning your dream wedding. Our team of experts will provide valuable advice and support, ensuring that every detail is handled for a truly magnificent celebration.',
    },
    {
      slogo: Slogo,
      Sname: 'Wedding Advisement',
      Sprocess:
        'Discover the Path to Your Perfect Union: Allow us to assist you in planning your dream wedding. Our team of experts will provide valuable advice and support, ensuring that every detail is handled for a truly magnificent celebration.',
    },
  ]
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <Heading
          title={'Our Services & Process'}
          discription={
            'Discover the Path to Your Perfect Union: Allow us to assist you in planning your dream wedding'
          }
        />
        <div className="flex flex-wrap justify-center items-start gap-4">
          {carddata.map((item, index) => (
            <div key={index} className="w-[22%] min-w-[200px]">
              <img src={item.slogo} alt={item.Sname} className="" />
              <h2 className="text-2xl mb-5 font-Roboto">{item.Sname}</h2>
              <p className="text-lg text-gray-600">{item.Sprocess}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ServicesCard
