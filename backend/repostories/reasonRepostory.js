const Reason = require("../models/reasonModel");
const BaseRepostory = require("./baseRepostory");

class ReasonRepostory extends BaseRepostory {
  // Özel sebep işlemleri burada tanımlanabilir
}

module.exports = new ReasonRepostory(Reason);
