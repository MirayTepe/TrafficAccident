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
  getAccidentsByReason,
  getAccidentsByTime,
} = require('../controllers/accidentController');

const router = express.Router();

// Routes
router.route('/getAllAccidentsSortedByDateAsc').get(getAllAccidentsSortedByDateAsc);
router.route('/getAllAccidentsSortedByDateDesc').get(getAllAccidentsSortedByDateDesc);
router.route('/getAccidentsByReason').get(getAccidentsByReason);
router.route('/getAccidentsByTime/:hour/:minute').get(getAccidentsByTime);
router.route('/').get(getAccidents).post(createAccident);

router.route('/:id').get(getAccidentById).put(updateAccident).delete(deleteAccident);

module.exports = router;
