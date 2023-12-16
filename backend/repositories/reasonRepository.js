const Reason = require("../models/reasonModel");
const BaseRepository = require("./baseRepository");

class ReasonRepository extends BaseRepository {
  // Özel sebep işlemleri burada tanımlanabilir
}

module.exports = new ReasonRepository(Reason);
