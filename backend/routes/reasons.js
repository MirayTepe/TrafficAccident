const express = require('express');
const validateToken = require('../middleware/validateTokenHandler');
const {
  createReason,
  getReasons,
  getReasonById,
  updateReason,
  deleteReason,
} = require('../controllers/reason');

const reasonRouter = express.Router();

// Middleware: Token Doğrulama
//reasonRouter.use(validateToken);

// Routes
reasonRouter.route('/').get(getReasons).post(createReason);

reasonRouter.route('/:id').get(getReasonById).put(updateReason).delete(deleteReason);

module.exports=reasonRouter;
