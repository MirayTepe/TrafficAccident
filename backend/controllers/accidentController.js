const AccidentRepository = require("../repositories/accidentRepository.js");

const getAccidents = async (req, res) => {
  const accidents = await AccidentRepository.getAll({ path: 'district reason driver accidentResult weather' });
  return res.status(200).json({
    count: accidents.length,
    data: accidents,
  });
};

const createAccident = async(req, res) => {
  const {   accidentType,district,date,time,weather,reason,driver,accidentResult  } = req.body;
  const newAccident={ accidentType,district,date,time,weather,reason,driver,accidentResult }

  const accident = await AccidentRepository.create(newAccident);
  if (!accident) {
    return res.status(400).json({ error: 'Bad Request. Accident creation failed.' });
  }
  res.status(201).json(accident);
};

const getAccidentById = async (req, res) => {
  const  id = req.params.id;
  const accident = await AccidentRepository.getById(id,{ path: 'district reason driver accidentResult weather' });
  if (!accident) {
    res.status(404);
    throw new Error('Accident not found');
  }
  return res.status(200).json({
    count: accident.length,
    data: accident,
  });
};

const updateAccident = async (req, res) => {
  const  id  = req.params.id;
  const {   accidentType,district,date,time,weather,reason,driver,accidentResult  } = req.body;
  const result = await AccidentRepository.update(id, { accidentType,district,date,time,weather,reason,driver,accidentResult },{ path: 'district reason driver accidentResult weather' });
  if (!result) {
    res.status(404);
    throw new Error('Accident not found');
  }
  res.status(200).json({ message: 'Accident updated successfully', data: result });
};

const deleteAccident = async (req, res) => {
  const id  = req.params.id;
  const result = await AccidentRepository.delete(id,{ path: 'district reason driver weather' });
  if (!result) {
    res.status(404);
    throw new Error('Accident not found');
  }
  res.status(200).json({ message: 'Accident deleted successfully', data: result });
};

const getAllAccidentsSortedByDateAsc = async (req, res) => {
  const accidents = await AccidentRepository.getAllAccidentsSortedByDateAsc();
  res.json(accidents);
};

const getAllAccidentsSortedByDateDesc= async (req, res) => {
  const accidents = await AccidentRepository.getAllAccidentsSortedByDateDesc();
  res.json(accidents);
};

const getAccidentsByDate = async (req, res) => {
  const { startDate, endDate } = req.query;
  const accidents = await AccidentRepository.getAccidentsByDate(startDate, endDate);
  res.json(accidents);
};

const getAccidentsByDistrict = async (req, res) => {

  const { district } = req.params;
  const accidents = await AccidentRepository.getAccidentsByDistrict(district);
  res.status(200).json({
    count: accidents.length,
    data: accidents,
  });
};
const getAccidentsByReason = async (req, res) => {

  const { reason } = req.params;
  const accidents = await AccidentRepository.getAccidentsByReason(reason);
  res.status(200).json({
    count: accidents.length,
    data: accidents,
  });
};


const getAccidentsByTime = async (req, res) => {
  const { hour, minute } = req.params;
  const parsedHour = parseInt(hour);
  const parsedMinute = parseInt(minute);
   if (isNaN(parsedHour) || isNaN(parsedMinute) || parsedHour < 0 || parsedHour > 23 || parsedMinute < 0 || parsedMinute > 59) {
      return res.status(400).json({ error: 'Geçersiz saat veya dakika değeri.' });

  }
   const accidents = await AccidentRepository.getAccidentsByTime(parsedHour, parsedMinute);
    res.status(200).json({
      count: accidents.length,
      data: accidents,
    });
}
module.exports = {
  getAccidents,
  getAllAccidentsSortedByDateAsc,
  getAllAccidentsSortedByDateDesc,
  createAccident,
  getAccidentById,
  updateAccident,
  deleteAccident,
  getAccidentsByDate,
  getAccidentsByDistrict,
  getAccidentsByTime,
  getAccidentsByReason,
};
