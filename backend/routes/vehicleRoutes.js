const express = require('express');
const validateToken = require('../middleware/authenticateUser');
const {
    createVehicle,
    getVehicles,
    getVehicleById,
    updateVehicle,
    deleteVehicle,
} = require('../controllers/vehicleController');

const reasonRouter = express.Router();

// Routes
reasonRouter.route('/').get(getVehicles).post(createVehicle);

reasonRouter.route('/:id').get(getVehicleById).put(updateVehicle).delete(deleteVehicle);

module.exports=reasonRouter;