const AccidentDriver = require("../models/accidentDriverModel");
const BaseRepository = require("./baseRepository");

class AccidentDriverRepository extends BaseRepository {
  // Özel semt işlemleri burada tanımlanabilir
}

module.exports = new AccidentDriverRepository(AccidentDriver);
