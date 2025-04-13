const express = require('express')
const { getAllCollegeCourseDetail, getCollegeCourseDetailBySearch, postCollegeandCourse } = require('../controllers/collegeCourseController');
const router = express.Router();

router.get('/', getAllCollegeCourseDetail);
router.get('/search', getCollegeCourseDetailBySearch);
router.post('/create', postCollegeandCourse);

module.exports = router;
