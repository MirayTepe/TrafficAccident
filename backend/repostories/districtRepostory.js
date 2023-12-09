const District = require("../models/districtModel");
const BaseRepostory = require("./baseRepostory");

class DistrictRepostory extends BaseRepostory {
  // Özel semt işlemleri burada tanımlanabilir
}

module.exports = new DistrictRepostory(District);
