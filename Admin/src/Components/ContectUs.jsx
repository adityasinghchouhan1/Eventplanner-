import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryApi from '../Common/SummaryApi'

const ContectUs = () => {
  const [getdata, setGetdata] = useState([])
  const [editData, setEditData] = useState(null)

  const fetchdata = async () => {
    try {
      const res = await axios.get(SummaryApi.Contectus.url)
      setGetdata(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${SummaryApi.contectusdelete.url}/${id}`)
      setGetdata((prev) => prev.filter((item) => item._id !== id))
    } catch (error) {
      console.log('Delete failed', error)
    }
  }

  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(
        `${SummaryApi.contectusupdate.url}/${editData._id}`,
        editData
      )
      setGetdata((prev) =>
        prev.map((item) => (item._id === editData._id ? res.data : item))
      )
      setEditData(null) // Close modal
    } catch (err) {
      console.log('Update failed', err)
    }
  }

  return (
    <div className="m-4">
      <h1 className="text-4xl font-semibold font-serif mb-6">
        Contact Us Data
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border">#</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">E-mail</th>
              <th className="p-3 border">Number</th>
              <th className="p-3 border">Message</th>
              <th className="p-3 border">Wedding Date</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {getdata.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-4 text-center">
                  No data found
                </td>
              </tr>
            ) : (
              getdata.map((item, index) => (
                <tr key={item._id || index} className="hover:bg-gray-100">
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{item.name}</td>
                  <td className="p-3 border">{item.mail}</td>
                  <td className="p-3 border">{item.number}</td>
                  <td className="p-3 border">{item.msg}</td>
                  <td className="p-3 border">{item.date}</td>
                  <td className="p-3 border space-x-2">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setEditData(item)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Contact Info</h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleEditChange}
                placeholder="Name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                name="mail"
                value={editData.mail}
                onChange={handleEditChange}
                placeholder="Email"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="number"
                value={editData.number}
                onChange={handleEditChange}
                placeholder="Number"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="msg"
                value={editData.msg}
                onChange={handleEditChange}
                placeholder="Message"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="date"
                name="date"
                value={editData.date}
                onChange={handleEditChange}
                className="w-full p-2 border rounded"
                required
              />
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setEditData(null)}
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContectUs
