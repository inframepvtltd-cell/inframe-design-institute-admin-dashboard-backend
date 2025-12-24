const express = require('express')
const multer = require('multer')
const { addSlider, viewSlider, viewSliderById, updateSlider } = require('../controllers/adminSliderController')

const adminSliderRoute = express.Router()

const storage = multer.memoryStorage()

const upload = multer({ storage })

adminSliderRoute.post('/add', upload.single('sliderImage'), addSlider)
adminSliderRoute.get('/view', viewSlider)
adminSliderRoute.get('/edit-slider/:editId', viewSliderById)
adminSliderRoute.post('/update-slider/:editId', upload.single('sliderImage'), updateSlider)




module.exports = { adminSliderRoute }