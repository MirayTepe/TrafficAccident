const Vehicle = require("../models/vehicleModel");
const BaseRepostory = require("./baseRepostory");

class VehicleRepostory extends BaseRepostory {
  // Özel araç işlemleri burada tanımlanabilir
}

module.exports = new VehicleRepostory(Vehicle);
