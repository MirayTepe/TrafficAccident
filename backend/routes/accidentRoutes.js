const express = require('express');
const setDistrictInRequest = require('../middleware/setDistrictInRequest');
const setReasonInRequest = require('../middleware/setReasonInRequest');
const {
  getAccidents,
  createAccident,
  getAccidentById,
  updateAccident,
  deleteAccident,
} = require('../controllers/accidentController');

const router = express.Router();

// Routes
router.route('/').get(getAccidents).post(createAccident);

router.route('/:id').get(getAccidentById).put(updateAccident).delete(deleteAccident);

module.exports = router;
