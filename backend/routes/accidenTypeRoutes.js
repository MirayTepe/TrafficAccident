const express = require('express');

const {
    createAccidentType,
    getAccidentTypes,
    getAccidentTypeById,
    updateAccidentType,
    deleteAccidentType,
} = require('../controllers/accidentTypeController');

const router = express.Router();

// Routes

router.route('/').get(getAccidentTypes).post(createAccidentType);

router.route('/:id').get(getAccidentTypeById).put(updateAccidentType).delete( deleteAccidentType);

module.exports = router;
