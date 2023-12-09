const express = require('express');
const validateToken = require('../middleware/authenticateUser');
const {
    createDriver,
    getDrivers,
    getDriverById,
    updateDriver,
    deleteDriver,
} = require('../controllers/driverController');

const reasonRouter = express.Router();

// Routes
reasonRouter.route('/').get(getDrivers).post(createDriver);

reasonRouter.route('/:id').get(getDriverById).put(updateDriver).delete(deleteDriver);

module.exports=reasonRouter;
