import React from 'react'
import { useState } from 'react'
import AboutIntro from '../../../Client/src/Components/AboutIntro'
import axios from 'axios'
import SummaryApi from '../Common/SummaryApi'

const SliderImgUpload = () => {
    const [Sdata, setSdata] = useState({
        image: null,
        title: '',
        description: '',
    })
    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (name === 'image') {
            setSdata({ ...Sdata, image: files[0] })
        } else {
            setSdata({ ...Sdata, [name]: value })
        }
    }

   const OnSubmitData = async (e) => {
    e.preventDefault();
    console.log(Sdata);

    try {
        const formData = new FormData();
        formData.append('image', Sdata.image);
        formData.append('title', Sdata.title);
        formData.append('description', Sdata.description);

        const res = await axios.post(SummaryApi.Sliderdataupload.url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log('Upload successful:', res.data);
    } catch (err) {
        console.error('Upload failed:', err);
    }
};

  return (
    <>
      <div className='p-5 '>
        <h1 className='text-5xl font-serif font-semibold'>Slider Image</h1>

        <div className='flex flex-col justify-center items-center gap-5 mt-10'>
            <label className='font-serif font-semibold'>Upload Image</label>
            <input
              type='file'
              accept='image/*'
              name='image'
              onChange={handleChange}
              className='border-2 border-gray-300 rounded-lg p-2 w-1/2'/>
              <label className='font-serif font-semibold'>Title</label>
              <input
                type='text'
                name='title'
                onChange={handleChange}
                className='border-2 border-gray-300 rounded-lg p-2 w-1/2'/>
              <label className='font-serif font-semibold'>Description</label>
              <input
                type='text'
                name='description'
                onChange={handleChange}
                className='border-2 border-gray-300 rounded-lg p-2 w-1/2'/>

                <button onClick={OnSubmitData} className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-5'>
                  Upload </button>
        </div>
      </div>
    </>
  )
}

export default SliderImgUpload
