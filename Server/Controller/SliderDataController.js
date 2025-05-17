const SliderData = require('../Modal/SliderModel');

const SliderDataController = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        console.log('Uploaded File:', req.file);

        const title = req.body.title;
        const description = req.body.description;

        // Safely get the uploaded image filename
        const Image = req.file?.originalname;

        if (!Image || !title || !description) {
            return res.status(400).json({
                status: false,
                message: 'Missing required fields (image, title, or description)',
            });
        }

        const sliderData = new SliderData({
    Image: req.file.originalname, // Save as "Image" in DB
            title,
            description,
        });

        await sliderData.save(); // Save to MongoDB

        res.status(200).json({
            status: true,
            message: 'Slider data saved successfully',
            data: sliderData,
        });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({
            status: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};


const getSliderData = async (req, res) => {
    try {
        const sliderData = await SliderData.find();
        res.status(200).json({
            status: true,
            message: 'Slider data retrieved successfully',
            data: sliderData,
        });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({
            status: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};

module.exports = { SliderDataController ,getSliderData};
