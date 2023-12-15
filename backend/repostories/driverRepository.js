const Driver = require("../models/driverModel");
const BaseRepository = require("./baseRepository");

class DriverRepository extends BaseRepository {
  // Özel araç işlemleri burada tanımlanabilir
}

module.exports = new DriverRepository(Driver);