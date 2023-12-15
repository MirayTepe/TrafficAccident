const express = require('express');
const validateToken = require('../middleware/authenticateUser');
const {
    createDriver,
    getDrivers,
    getDriverById,
    updateDriver,
    deleteDriver,
} = require('../controllers/driverController');

const driverRouter = express.Router();

// Routes
driverRouter.route('/').get(getDrivers).post(createDriver);

driverRouter.route('/:id').get(getDriverById).put(updateDriver).delete(deleteDriver);

module.exports=driverRouter;
