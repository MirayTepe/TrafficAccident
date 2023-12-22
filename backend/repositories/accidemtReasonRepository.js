const AccidentReason = require("../models/accidentReasonModel");
const BaseRepository = require("./baseRepository");

class AccidentReasonRepository extends BaseRepository {
  // Özel araç işlemleri burada tanımlanabilir
}

module.exports = new AccidentReasonRepository(AccidentReason);