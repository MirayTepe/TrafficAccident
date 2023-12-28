const AccidentReason = require("../models/accidentReasonModel");
const BaseRepository = require("./baseRepository");

class AccidentReasonRepository extends BaseRepository {
 
}

module.exports = new AccidentReasonRepository(AccidentReason);