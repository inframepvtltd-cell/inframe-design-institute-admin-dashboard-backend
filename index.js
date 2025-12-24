const dotenv = require('dotenv')
const express = require('express')
const { adminRoute } = require('./routes/adminRoutes')
const { adminModel } = require('./model/adminModel')
const connectDB = require('./config/dbConnect')
dotenv.config()
const app = express()
app.use(express.json())

app.use('/admin', adminRoute)


connectDB().then(async () => {
    //one time password working
    const adminExist = await adminModel.find()
    if (adminExist.length == 0) {
        const hashedPassword = await bcrypt.hash("admin123", 10); // 10 = salt rounds
        await adminModel.insertOne({
            admin_userEmail: "admin@123",
            admin_userPassword: hashedPassword
        })
    }
    app.listen(process.env.PORT || 8200, '0.0.0.0', () => {
        console.log(`✅ Server running on port ${process.env.PORT}`)
    })

})