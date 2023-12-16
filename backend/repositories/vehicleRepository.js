const Vehicle = require("../models/vehicleModel");
const BaseRepository = require("./baseRepository");

class VehicleRepository extends BaseRepository {
  // Özel araç işlemleri burada tanımlanabilir
}

module.exports = new VehicleRepository(Vehicle);
