const express = require('express');
const router = express.Router();
const { createStudent, getAllStudent } = require('../controllers/studentController')

router.post('/', createStudent)

router.get('/', getAllStudent)

module.exports = router;