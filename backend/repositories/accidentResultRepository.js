const AccidentResult = require("../models/accidentResultsModel");
const BaseRepository = require("./baseRepository");

class AccidentResultRepository extends BaseRepository {
  // Özel araç işlemleri burada tanımlanabilir
}

module.exports = new AccidentResultRepository(AccidentResult);