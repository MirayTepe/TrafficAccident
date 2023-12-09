const AccidentRepostory = require("../repostories/accidentRepostory.js");
const getAccidents = async (req, res) => {
  const accidents = await AccidentRepostory.getAll({ path: 'district reason' });
  return res.status(200).json({
    count: accidents.length,
    data: accidents,
  });
};
const createAccident = async(req, res) => {
  const { district,date,time,reason} = req.body;
  const newAccident = {
    district,
    date,
    time,
    reason
  };
  const accident = await AccidentRepostory.create(newAccident);
  if (!accident) {
    return res.status(400).json({ error: 'Bad Request. Accident creation failed.' });
  }

  
  res.status(201).json(accident);
};

const getAccidentById = async (req, res) => {
  const { id } = req.params;
  const accident = await AccidentRepostory.getById(id,{ path: 'district reason' });
  if (!accident) {
    res.status(404);
    throw new Error('Accident not found');
  }
  res.status(200).json(accident);
};

const updateAccident = async (req, res) => {
  const { id } = req.params;
  const { district,date,time,reason } = req.body;
  const result = await AccidentRepostory.update(id, {district,date,time,reason},{ path: 'district reason' });
  if (!result) {
    res.status(404);
    throw new Error('Accident not found');
  }
  res.status(200).json({ message: 'Accident updated successfully', data: result });
};

const deleteAccident = async (req, res) => {
  const { id } = req.params;
  const result = await AccidentRepostory.delete(id,{ path: 'district reason' });
  if (!result) {
    res.status(404);
    throw new Error('Accident not found');
  }

  res.status(200).json({ message: 'Accident deleted successfully', data: result });
};

module.exports = {
  getAccidents,
  createAccident,
  getAccidentById,
  updateAccident,
  deleteAccident,
};
