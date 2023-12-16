const mongoose = require("mongoose");
const dateFormat = require("date-format");

const accidentSchema = new mongoose.Schema({
  accidentType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: String,
    required: true,
  },
  district: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'District',
    required: true,
  },
  date: {
    type: String,
    required: true,
    get: function () {
      const date = new Date(this.value);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ay endeksleri 0'dan başlar, bu yüzden +1 ekliyoruz.
      const year = date.getFullYear().toString();

      return `${day}-${month}-${year}`;
    },
  },
  time: {
    type: String,
    required: true,
  },
  reason: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reason',
    required: true,
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
    required: true,
  },
  weather: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Weather',
    required: true,
  },
  accidentResult: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AccidentResult',
    required: true,
  },
  image: {
    type: String,
  }
});

// Diğer gerekli alanlar

const Accident = mongoose.model('Accident', accidentSchema);

module.exports = Accident;
