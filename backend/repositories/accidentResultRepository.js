const AccidentResult = require("../models/accidentModel");
const BaseRepository = require("./baseRepository");

class AccidentResultRepository extends BaseRepository {
  // Özel araç işlemleri burada tanımlanabilir
}

module.exports = new AccidentResultRepository(AccidentResult);