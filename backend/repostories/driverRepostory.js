const Driver = require("../models/driverModel");
const BaseRepostory = require("./baseRepostory");

class DriverRepostory extends BaseRepostory {
  // Özel araç işlemleri burada tanımlanabilir
}

module.exports = new DriverRepostory(Driver);