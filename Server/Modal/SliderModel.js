const mongoose = require('mongoose');

const sliderShcema = mongoose.Schema({
    Image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
type:String,
        required:true
    }
})

const Slider = mongoose.model('Slider',sliderShcema);
module.exports = Slider;