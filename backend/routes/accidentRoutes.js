const express = require('express');

const {
  getAccidents,
  getAllAccidentsSortedByDateAsc,
  getAllAccidentsSortedByDateDesc,
  createAccident,
  getAccidentById,
  updateAccident,
  deleteAccident,
  getAccidentsByDate,
  getAccidentsByDistrict,
  getAccidentsByReason
} = require('../controllers/accidentController');

const router = express.Router();

// Routes
router.route('/getAllAccidentsSortedByDateAsc',getAllAccidentsSortedByDateAsc);
router.route('/getAllAccidentsSortedByDateDesc',getAllAccidentsSortedByDateDesc);
router.route('/getAccidentsByReason',getAccidentsByReason);
router.route('/').get(getAccidents).post(createAccident);

router.route('/:id').get(getAccidentById).put(updateAccident).delete(deleteAccident);

module.exports = router;
