const express = require('express');
const router = express.Router();
const { createEnquiry, getAllEnquiry, getEnquiryByProp, getSourceDetail } = require('../controllers/equiryController');

router.post('/', createEnquiry);
router.get('/', getAllEnquiry);
router.post('/search', getEnquiryByProp);
router.get('/source', getSourceDetail)

module.exports = router;