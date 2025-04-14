const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')
require('dotenv').config();
const studentRoute = require('./routes/studentRoutes')
const enquiryRoute = require('./routes/enquiryRoutes')
const collegeCourse = require('./routes/collegeCourseDetailRoutes')
const courseRoutes = require('./routes/courseRoutes');


const app = express()

app.use(cors());
app.use(express.json());
app.use('/api/students', studentRoute);
app.use('/api/enquiry', enquiryRoute);
app.use('/api/collegecourse', collegeCourse);
app.use('/api/courses', courseRoutes);
app.use((req, res, next) => {
    console.log(`404-Not found ${req.method} ${req.originalUrl}`)
    res.status(404).json({ message: 'Route not found' })
})


connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server Connected on Port', PORT)

})
