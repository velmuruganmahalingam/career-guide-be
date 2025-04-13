const student = require('../models/student')

const createStudent = async (req, res) => {
    try {
        const students = new student(req.body);
        await students.save();
        res.status(201).json({ message: "Student Registered successfully", students });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Student Registration failed", err });
    }
}

const getAllStudent = async (req, res) => {
    try {
        const getStud = await student.find();
        res.status(200).json({ getStud })
    }
    catch {
        res.status(500).json({ message: "Failed to get all students" })
    }
}

module.exports = {
    createStudent,
    getAllStudent
}