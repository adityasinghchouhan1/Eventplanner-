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
Router.delete('./deleteContect', DeleteContectusData)
Router.put('./updateContectdata', UpdateContectDetails)
module.exports = Router
