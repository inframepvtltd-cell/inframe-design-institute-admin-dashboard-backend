const express = require('express')
const { adminUserLogin } = require('../controllers/adminController')

const adminUserRoute = express.Router()

adminUserRoute.post('/login', adminUserLogin)


module.exports = { adminUserRoute }