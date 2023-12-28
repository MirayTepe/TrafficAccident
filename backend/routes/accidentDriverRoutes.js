const express = require('express');
const validateToken = require('../middleware/authenticateUser');
const {
    createAccidentDriver,
    getAccidentDrivers,
    getAccidentDriverById,
    updateAccidentDriver,
    deleteAccidentDriver,
} = require('../controllers/accidentDriverController');

const accidentDriverRouter = express.Router();

// Routes
accidentDriverRouter.route('/').get(getAccidentDrivers).post(createAccidentDriver);

accidentDriverRouter.route('/:id').get(getAccidentDriverById).put(updateAccidentDriver).delete(deleteAccidentDriver);

module.exports=accidentDriverRouter;
