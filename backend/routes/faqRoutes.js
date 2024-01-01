const express = require('express');
const validateToken = require('../middleware/authenticateUser'); // Eğer yetkilendirme işlemi yapacaksanız kullanabilirsiniz.
const {
  getAllQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getAnsweredQuestions,
  getAnsweredByAdmin,
  getQuestionsByDateRange,
} = require('../controllers/faqController');

const faqRoutes = express.Router();

// Routes
faqRoutes.route('/').get(getAllQuestions).post(createQuestion);

faqRoutes
  .route('/:id')
  .put(updateQuestion)
  .delete(deleteQuestion);

faqRoutes.route('/answered').get(getAnsweredQuestions);

faqRoutes.route('/answered/:adminId').get(getAnsweredByAdmin);

faqRoutes.route('/date-range').get(getQuestionsByDateRange);

module.exports = faqRoutes;
