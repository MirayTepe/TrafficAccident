const express = require('express');
const validateToken = require('../middleware/authenticateUser');
const {
    createWeather,
    getWeathers,
    getWeatherById,
    updateWeather,
    deleteWeather
} = require('../controllers/weatherController');

const weatherRoutes = express.Router();

// Routes
weatherRoutes.route('/').get(getWeathers).post(createWeather);

weatherRoutes.route('/:id').get(getWeatherById).put(updateWeather).delete(deleteWeather);

module.exports=weatherRoutes;