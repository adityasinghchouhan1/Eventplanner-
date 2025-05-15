const express = require('express')
const Router = express.Router()

const {
  ContectDataFunction,
  getContectData,
  DeleteContectusData,
  UpdateContectDetails,
} = require('../Controller/ContectUsController')

Router.post('/contectus', ContectDataFunction)
Router.get('/getcontectus', getContectData)
Router.delete('/deleteContect/:id', DeleteContectusData)
Router.put('/updateContectdata/:id', UpdateContectDetails)

module.exports = Router
