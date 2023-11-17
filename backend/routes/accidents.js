const express = require('express');
const setStreetInRequest = require('../middleware/setStreetInRequest');
const setReasonInRequest = require('../middleware/setReasonInRequest');
const {
  getAccidents,
  createAccident,
  getAccident,
  updateAccident,
  deleteAccident,
} = require('../controllers/accident');

const router = express.Router();

// Middleware: Sokak bilgisini req.street'e ekleyin
router.use('/:street_id', setStreetInRequest);

// Middleware: Reason bilgisini req.reason'a ekleyin
router.use('/:street_id/:reason_id', setReasonInRequest);

// Routes
router.route('/').get(getAccidents).post(createAccident);

router.route('/:id').get(getAccident).put(updateAccident).delete(deleteAccident);

module.exports = router;
