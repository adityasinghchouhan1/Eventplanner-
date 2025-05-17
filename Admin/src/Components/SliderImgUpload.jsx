import React from 'react'
import { useState } from 'react'
import AboutIntro from '../../../Client/src/Components/AboutIntro'
import axios from 'axios'
import SummaryApi from '../Common/SummaryApi'
import { useEffect } from 'react'

const SliderImgUpload = () => {
const [sliderList, setSliderList] = useState([]);
    const [Sdata, setSdata] = useState({
        image: null,
        title: '',
        description: '',
    })


   useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(SummaryApi.getSliderdata.url);
      setSliderList(res.data?.data || []); // assuming response has { data: [...] }
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
}, []);


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
        setSdata({
            image: null,
            title: '',
            description: '',
        });
    } catch (err) {
        console.error('Upload failed:', err);
    }
};

  return (
    <>
      <div className='p-5 '>
        <h1 className='text-5xl font-serif font-semibold'>Slider Image</h1>

        <div className='flex flex-col justify-center items-start gap-5 mt-10'>
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

                <button onClick={OnSubmitData} className='bg-blue-500 flex justify-center text-white font-semibold py-2 px-4 rounded-lg mt-5'>
                  Upload </button>
        </div>
        {sliderList.length > 0 ? (
  <div className="mt-10 w-full">
    <h2 className="text-3xl font-serif font-semibold mb-4">Slider Data Table</h2>
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        {sliderList.map((item, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">
              <img
                src={`http://localhost:8008/api/uploads/${item.image}`} // update to your actual path
                alt="slider"
                className="w-24 h-auto rounded"
              />
            </td>
            <td className="border border-gray-300 px-4 py-2">{item.title}</td>
            <td className="border border-gray-300 px-4 py-2">{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
) : (
  <p className="text-gray-500 mt-10">No slider data found.</p>
)}

      </div>
    </>
  )
}

export default SliderImgUpload
