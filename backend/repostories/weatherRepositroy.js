const Weather = require("../models/weatherModel");
const BaseRepository = require("./baseRepository");

class WeatherRepository extends BaseRepository {
  // Özel araç işlemleri burada tanımlanabilir
}

module.exports = new WeatherRepository(Weather);