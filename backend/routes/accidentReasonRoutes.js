const express = require('express');
const validateToken = require('../middleware/authenticateUser');
const {
    createAccidentReason ,
    getAccidentReasons,
    getAccidentReasonById,
    updateAccidentReason ,
    deleteAccidentReason ,
} = require('../controllers/accidentReasonController');

const accidentReasonRouter = express.Router();

// Routes
accidentReasonRouter.route('/').get(getAccidentReasons).post(createAccidentReason);

accidentReasonRouter.route('/:id').get(getAccidentReasonById).put(updateAccidentReason).delete(deleteAccidentReason);

module.exports=accidentReasonRouter;
