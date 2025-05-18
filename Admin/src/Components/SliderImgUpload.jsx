import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SummaryApi from '../Common/SummaryApi';

const SliderImgUpload = () => {
  const [sliderList, setSliderList] = useState([]);
  const [Sdata, setSdata] = useState({ image: null, title: '', description: '' });
  const [editingIndex, setEditingIndex] = useState(null); // Track row being edited
  const [editedData, setEditedData] = useState({ title: '', description: '' });

  const fetchData = async () => {
    try {
      const res = await axios.get(SummaryApi.getSliderdata.url);
      setSliderList(res.data?.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setSdata({ ...Sdata, image: files[0] });
    } else {
      setSdata({ ...Sdata, [name]: value });
    }
  };

  const OnSubmitData = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', Sdata.image);
      formData.append('title', Sdata.title);
      formData.append('description', Sdata.description);

     await axios.post(SummaryApi.Sliderdataupload.url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setSdata({ image: null, title: '', description: '' });
      fetchData();
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${SummaryApi.deleteslider.url}/${id}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedData({
      title: sliderList[index].title,
      description: sliderList[index].description,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = async (id) => {
    try {
      const updated = {
        title: editedData.title,
        description: editedData.description,
      };

      await axios.put(`${SummaryApi.UpdateSlider.url}/${id}`, updated);
      setEditingIndex(null);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='p-5'>
      <h1 className='text-5xl font-serif font-semibold'>Slider Image</h1>

      {/* Upload Form */}
      <div className='flex flex-col justify-center items-start gap-5 mt-10'>
        <label className='font-serif font-semibold'>Upload Image</label>
        <input
          type='file'
          accept='image/*'
          name='image'
          onChange={handleChange}
          className='border-2 border-gray-300 rounded-lg p-2 w-1/2'
        />
        <label className='font-serif font-semibold'>Title</label>
        <input
          type='text'
          name='title'
          onChange={handleChange}
          className='border-2 border-gray-300 rounded-lg p-2 w-1/2'
        />
        <label className='font-serif font-semibold'>Description</label>
        <input
          type='text'
          name='description'
          onChange={handleChange}
          className='border-2 border-gray-300 rounded-lg p-2 w-1/2'
        />

        <button
          onClick={OnSubmitData}
          className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-5'
        >
          Upload
        </button>
      </div>

      {/* Data Table */}
      {sliderList.length > 0 ? (
        <div className='mt-10 w-full'>
          <h2 className='text-3xl font-serif font-semibold mb-4'>Slider Data Table</h2>
          <table className='table-auto w-full border-collapse border border-gray-300'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='border border-gray-300 px-4 py-2'>Image</th>
                <th className='border border-gray-300 px-4 py-2'>Title</th>
                <th className='border border-gray-300 px-4 py-2'>Description</th>
                <th className='border border-gray-300 px-4 py-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sliderList.map((item, index) => (
                <tr key={index} className='hover:bg-gray-50'>
                  <td className='border border-gray-300 px-4 py-2'>
                    <img
                      src={`${SummaryApi.getSliderdata.imageBaseUrl}/${item.image}`}
                      alt='slider'
                      className='w-24 h-auto rounded'
                    />
                  </td>

                  <td className='border border-gray-300 px-4 py-2'>
                    {editingIndex === index ? (
                      <input
                        type='text'
                        name='title'
                        value={editedData.title}
                        onChange={handleEditChange}
                        className='border p-1 rounded w-full'
                      />
                    ) : (
                      item.title
                    )}
                  </td>

                  <td className='border border-gray-300 px-4 py-2'>
                    {editingIndex === index ? (
                      <input
                        type='text'
                        name='description'
                        value={editedData.description}
                        onChange={handleEditChange}
                        className='border p-1 rounded w-full'
                      />
                    ) : (
                      item.description
                    )}
                  </td>

                  <td className='border border-gray-300 px-4 py-2 space-x-2'>
                    {editingIndex === index ? (
                      <button
                        onClick={() => handleSave(item._id)}
                        className='bg-green-500 text-white px-3 py-1 rounded'
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(index)}
                        className='bg-yellow-500 text-white px-3 py-1 rounded'
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(item._id)}
                      className='bg-red-500 text-white px-3 py-1 rounded'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className='text-gray-500 mt-10'>No slider data found.</p>
      )}
    </div>
  );
};

export default SliderImgUpload;
