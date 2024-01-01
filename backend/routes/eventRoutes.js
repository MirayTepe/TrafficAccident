const express = require('express');
const validateToken = require('../middleware/authenticateUser');
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventController');

const eventRoutes = express.Router();

// Routes
eventRoutes.route('/').get(getEvents).post(createEvent);

eventRoutes
  .route('/:id')
  .get(getEventById)
  .put(updateEvent)
  .delete(deleteEvent);

module.exports = eventRoutes;
