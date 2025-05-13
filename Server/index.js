const express = require('express')
const server = express()
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config() // <--- Load environment variables

server.use(cors())
server.use(bodyparser.json())
server.use(express.json())

const DBConnection = mongoose.connect(process.env.DBconnection)

DBConnection.then(() => {
  server.listen(() => {
    console.log('server is running')
    console.log('DB')
  })
}).catch((err) => {
  console.log('Error:', err)
})
