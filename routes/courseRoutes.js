const express = require('express');
const {
    // Education Level Controllers
    postEducationLevel,
    getAllEducationLevels,

    // Course Category Controllers
    postCourseCategory,
    getAllCourseCategories,

    // Course Controllers
    postCourse,
    getAllCourses,
    getCoursesWithFilters,
    getCourseBySearch,
    getCourseById,
    getCategorizedCoursesByLevel
} = require('../controllers/courseController');

const router = express.Router();

// ===== Education Level Routes =====
router.post('/education-level', postEducationLevel);
router.get('/education-level', getAllEducationLevels);

// ===== Course Category Routes =====
router.post('/category', postCourseCategory);
router.get('/category', getAllCourseCategories);

// ===== Course Routes =====
router.post('/course', postCourse);
router.get('/course', getAllCourses);
router.get('/course/search', getCourseBySearch);
router.get('/course/filter', getCoursesWithFilters);
router.get('/course/:id', getCourseById);
router.get('/course/level/:levelId', getCategorizedCoursesByLevel);

module.exports = router;
