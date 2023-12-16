const express = require('express');

const {
    createAccidentResult,
    getAccidentResults,
    getAccidentResultById,
    updateAccidentResult,
    deleteAccidentResult,
} = require('../routes/accidentResultContoller');

const accidentResultRouter = express.Router();

// Routes

accidentResultRouter.route('/').get(getAccidentResults).post(createAccidentResult);

accidentResultRouter.route('/:id').get(getAccidentResultById).put(updateAccidentResult).delete(deleteAccidentResult);

module.exports=accidentResultRouter;
