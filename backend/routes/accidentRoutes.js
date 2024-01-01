const express = require('express');
const router = express.Router();

const {
  getAccidents,
  getAllAccidentsSortedByDateAsc,
  getAllAccidentsSortedByDateDesc,
  createAccident,
  getAccidentById,
  updateAccident,
  deleteAccident,
  getAccidentsByDate,
  accidentCountsByMonth,
  getAccidentsByTime,
  getAccidentsGroupedByWeather,
  getAccidentsMapData,
} = require('../controllers/accidentController');

// Routes
router.get('/getAccidentsGroupedByWeather', getAccidentsGroupedByWeather);
router.get('/getAllAccidentsSortedByDateAsc', getAllAccidentsSortedByDateAsc);
router.get('/getAllAccidentsSortedByDateDesc', getAllAccidentsSortedByDateDesc);
router.get('/getAccidentsByTime/:hour/:minute', getAccidentsByTime);
router.get('/getAccidentsMapData', getAccidentsMapData); // Eklenen kısım
router.route('/')
  .get(getAccidents)
  .post(createAccident);

router.get('/accidents-by-month', accidentCountsByMonth);
router.route('/:id')
  .get(getAccidentById)
  .put(updateAccident)
  .delete(deleteAccident);

module.exports = router;
