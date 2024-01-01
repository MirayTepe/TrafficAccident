const express = require('express');
const validateToken = require('../middleware/authenticateUser');
const {
    createAccidentReason ,
    getAccidentReasons,
    getAccidentReasonById,
    updateAccidentReason ,
    deleteAccidentReason ,
    getAccidentCountsByReason
} = require('../controllers/accidentReasonController');

const accidentReasonRouter = express.Router();

// Rotayı önce 'counts-by-reason' ile eşleşecek şekilde düzenle
accidentReasonRouter.route('/counts-by-reason').get(getAccidentCountsByReason);

// Diğer rotaları belirli bir ID ile eşleşecek şekilde sırala
accidentReasonRouter.route('/:id').get(getAccidentReasonById).put(updateAccidentReason).delete(deleteAccidentReason);

// Son olarak diğer rotaları eşleşecek şekilde sırala
accidentReasonRouter.route('/').get(getAccidentReasons).post(createAccidentReason);

module.exports = accidentReasonRouter;
