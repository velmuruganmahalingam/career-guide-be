const EducationLevel = require("../models/EducationLevel");
const CourseCategory = require("../models/CourseCategory");
const Course = require("../models/EducationLevel");

// ==== Education Level Controllers ====

const postEducationLevel = async (req, res) => {
    try {
        const newEducationLevel = await EducationLevel.create(req.body);
        res.status(201).json({
            message: "Education level created successfully",
            data: newEducationLevel
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error creating education level",
            error: err.message
        });
    }
};

const getAllEducationLevels = async (req, res) => {
    try {
        const educationLevels = await EducationLevel.find().sort({ order: 1 });
        res.status(200).json({
            message: "Education levels retrieved successfully",
            data: educationLevels
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            message: "Failed to retrieve education levels",
            error: err.message
        });
    }
};

// ==== Course Category Controllers ====

const postCourseCategory = async (req, res) => {
    try {
        const newCourseCategory = await CourseCategory.create(req.body);
        res.status(201).json({
            message: "Course category created successfully",
            data: newCourseCategory
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error creating course category",
            error: err.message
        });
    }
};

const getAllCourseCategories = async (req, res) => {
    try {
        const courseCategories = await CourseCategory.find();
        res.status(200).json({
            message: "Course categories retrieved successfully",
            data: courseCategories
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            message: "Failed to retrieve course categories",
            error: err.message
        });
    }
};

// ==== Course Controllers ====

const postCourse = async (req, res) => {
    try {
        const newCourse = await Course.create(req.body);
        res.status(201).json({
            message: "Course created successfully",
            data: newCourse
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error creating course",
            error: err.message
        });
    }
};

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find()
            .populate('level', 'id label')
            .populate('category', 'id title');

        res.status(200).json({
            message: "Courses retrieved successfully",
            data: courses
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            message: "Failed to retrieve courses",
            error: err.message
        });
    }
};

const getCoursesWithFilters = async (req, res) => {
    try {
        const { level, category, searchQuery } = req.query;
        const filter = {};

        if (level) {
            filter.level = level;
        }

        if (category) {
            filter.category = category;
        }

        if (searchQuery) {
            filter.name = { $regex: searchQuery, $options: "i" };
        }

        const courses = await Course.find(filter)
            .populate('level', 'id label')
            .populate('category', 'id title');

        res.status(200).json({
            message: "Filtered courses retrieved successfully",
            data: courses
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            message: "Failed to retrieve filtered courses",
            error: err.message
        });
    }
};

const getCategorizedCoursesByLevel = async (req, res) => {
    try {
        // This endpoint returns courses categorized by level
        const { levelId } = req.params;

        // First get all categories
        const categories = await CourseCategory.find();

        // For each category, get courses matching the level
        const result = await Promise.all(categories.map(async (category) => {
            const courses = await Course.find({
                level: levelId,
                category: category._id
            }).select('name description');

            return {
                id: category.id,
                title: category.title,
                description: category.description,
                icon: category.icon,
                iconColor: category.iconColor,
                courses: courses
            };
        }));

        // Filter out categories with no courses
        const filteredResult = result.filter(category => category.courses.length > 0);

        res.status(200).json({
            message: "Categorized courses retrieved successfully",
            data: filteredResult
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            message: "Failed to retrieve categorized courses",
            error: err.message
        });
    }
};

const getCourseBySearch = async (req, res) => {
    try {
        const searchQuery = req.query.searchQuery;
        const courses = await Course.find({
            name: { $regex: searchQuery, $options: "i" }
        })
            .populate('level', 'id label')
            .populate('category', 'id title');

        res.status(200).json({
            message: "Search results:",
            data: courses
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            message: "Failed to search courses",
            error: err.message
        });
    }
};

const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findById(id)
            .populate('level', 'id label')
            .populate('category', 'id title');

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.status(200).json({
            message: "Course retrieved successfully",
            data: course
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            message: "Failed to retrieve course",
            error: err.message
        });
    }
};

module.exports = {
    // Education Level exports
    postEducationLevel,
    getAllEducationLevels,

    // Course Category exports
    postCourseCategory,
    getAllCourseCategories,

    // Course exports
    postCourse,
    getAllCourses,
    getCoursesWithFilters,
    getCourseBySearch,
    getCourseById,
    getCategorizedCoursesByLevel
};