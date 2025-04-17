const express = require('express');
const {
    postEducationLevel,
    getAllEducationLevels,

    postCourseCategory,
    getAllCourseCategories,

    postCourse,
    getAllCourses,
    getCoursesWithFilters,
    getCourseBySearch,
    getCourseById,
    getCategorizedCoursesByLevel
} = require('../controllers/courseController');

const router = express.Router();

router.post('/education-level', postEducationLevel);
router.get('/education-level', getAllEducationLevels);

router.post('/category', postCourseCategory);
router.get('/category', getAllCourseCategories);

router.post('/course', postCourse);
router.get('/course', getAllCourses);
router.get('/course/search', getCourseBySearch);
router.get('/course/filter', getCoursesWithFilters);
router.get('/course/:id', getCourseById);
router.get('/course/level/:levelId', getCategorizedCoursesByLevel);

module.exports = router;
