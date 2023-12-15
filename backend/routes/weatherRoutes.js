const express = require('express');
const validateToken = require('../middleware/authenticateUser');
const {
    createWeather,
    getWeathers,
    getWeatherById,
    updateWeather,
    deleteWeather
} = require('../controllers/weatherController');

const reasonRouter = express.Router();

// Routes
reasonRouter.route('/').get(getWeathers).post(createWeather);

reasonRouter.route('/:id').get(getWeatherById).put(updateWeather).delete(deleteWeather);

module.exports=reasonRouter;