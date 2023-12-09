const express = require('express');

const {
  createDistrict,
  getDistricts,
  getDistrictById,
  updateDistrict,
  deleteDistrict,
} = require('../controllers/districtController');

const districtRouter = express.Router();

// Middleware: Token Doğrulama
//streetRouter.use(validateToken);

// Routes
districtRouter.route('/').get(getDistricts).post(createDistrict);

districtRouter.route('/:id').get(getDistrictById).put(updateDistrict).delete(deleteDistrict);

module.exports=districtRouter;
