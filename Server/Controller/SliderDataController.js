const SliderData = require('../Modal/SliderModel');

const SliderDataController = async (req, res) => {
    console.log(req.body);
    try {
         const image = req.body.image;
    const title = req.body.title;   
    const description = req.body.description;
    const sliderData = new SliderData({
        image: image,
        title: title,
        description: description
    });
        res.status(200).json({
            status: true,
            message: "Slider data Save successfully",
            data: sliderData
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Internal server error",
            error: error.message
        });
    }
}

module.exports = {SliderDataController};