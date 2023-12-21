const Accident = require("../models/accidentModel");
const BaseRepository = require("./baseRepository");

class AccidentRepository extends BaseRepository {

  async getAllAccidentsSortedByDateAsc() {

    const accidents = await Accident.find().sort({ date: 'asc' });
    return accidents;

  }
  async getAllAccidentsSortedByDateDesc() {

    const accidents = await Accident.find().sort({ date: 'desc' });
    return accidents;

  }
  async getAccidentsByDate(startDate, endDate) {

    const startDateTime = new Date(startDate);
    const endDateTime = new Date(endDate);


    if (isNaN(startDateTime.getTime()) || isNaN(endDateTime.getTime())) {
      throw new Error("Geçersiz tarih formatı");
    }


    const accidents = await this.model.find({
      date: { $gte: startDateTime, $lt: endDateTime }
    });

    return accidents;
  }
  async getAccidentsByDistrict(district) {

    const accident = await Accident.find({ district: district._id });
    return accident;

  };
  async getAccidentsByReason(reason) {

    const accident = await Accident.find({ reason: reason._id });
    return accident;

  };
  async filterAccidentsByTime(hour, minute) {

    const startTime = new Date();
    startTime.setHours(hour, minute, 0, 0);

    const endTime = new Date();
    endTime.setHours(hour, minute, 59, 999);

    const accidents = await Accident.find({
      time: {
        $gte: startTime.toISOString(),
        $lte: endTime.toISOString(),
      },
    });

    return accidents;

  }



}

module.exports = new AccidentRepository(Accident);
