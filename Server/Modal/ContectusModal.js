const mongoose = require('mongoose')

const ContectSchema = new mongoose.Schema({
  name: {
    type: String,
    requied: true,
  },
  mail: {
    type: String,
    requied: true,
  },
  phone: {
    type: Number,
    requied: true,
  },
  date: {
    type: String,
    requied: true,
  },
  msg: {
    type: String,
    requied: true,
  },
})
