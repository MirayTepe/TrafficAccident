const express = require('express');
const validateToken = require('../middleware/validateTokenHandler');
const {
  createStreet,
  getStreets,
  getStreetById,
  updateStreet,
  deleteStreet,
} = require('../controllers/street');

const streetRouter = express.Router();

// Middleware: Token Doğrulama
//streetRouter.use(validateToken);

// Routes
streetRouter.route('/').get(getStreets).post(createStreet);

streetRouter.route('/:id').get(getStreetById).put(updateStreet).delete(deleteStreet);

module.exports=streetRouter;
