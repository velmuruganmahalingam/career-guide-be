const collegeandcourse = require("../models/collegeandcourse");

const postCollegeandCourse = async (req, res) => {
    try {
        const newcollegeandcourse = await collegeandcourse.create(req.body);
        res.status(201).json({ message: "College and course detail stored in db", data: newcollegeandcourse });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Error in storing college and course detail in db", data: err })
    }
}

const getAllCollegeCourseDetail = async (req, res) => {
    try {
        const collegeSpecDetail = await collegeandcourse.find();
        res.status(201).json({ message: "Gathered all college course details", data: collegeSpecDetail });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Failed to gather all college course details", err })
    }
}

const getCollegeCourseDetailBySearch = async (req, res) => {
    try {
        const searchQuery = req.query.searchQuery;
        const collegeCourseDetail = await collegeandcourse.find({
            name: { $regex: searchQuery, options: "i" }
        })
        res.status(201).json({ message: "Search Details are:", data: collegeCourseDetail });
    }
    catch (err) {
        console.error(err.message)
        res.status(500).json({ message: "Failed to get the details", err })
    }
}

module.exports = ({
    getAllCollegeCourseDetail,
    getCollegeCourseDetailBySearch,
    postCollegeandCourse
})