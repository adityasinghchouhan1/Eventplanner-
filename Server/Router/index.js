const express = require('express')
const Router = express.Router()
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const {
  ContectDataFunction,
  getContectData,
  DeleteContectusData,
  UpdateContectDetails,
} = require('../Controller/ContectUsController')

const {SliderDataController} = require('../Controller/SliderDataController')


// Contect Us Route
Router.post('/contectus', ContectDataFunction)
Router.get('/getcontectus', getContectData)
Router.delete('/deleteContect/:id', DeleteContectusData)
Router.put('/updateContectdata/:id', UpdateContectDetails)

// Slider Route
Router.post('/sliderdata',upload.single('image'), SliderDataController) 


module.exports = Router
