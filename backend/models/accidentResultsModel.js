const mongoose = require("mongoose");

const accidentResultSchema = new mongoose.Schema({
    deathCount: {
        type: Number,
        required: true,
    },
      injuryCount: {
        type: Number,
        required: true,
    },
      
 
});

const AccidentResult = mongoose.model("AccidentResult", accidentResultSchema);

module.exports = AccidentResult;
