const DistrictRepostory = require('../repostories/districtRepository.js');


const createDistrict = async (req, res) => {
  const { district_name,street_name } = req.body;
  if (!district_name) {
    res.status(400);
    throw new Error('All fields are mandatory!');
  }
  const newDistrict = {
    district_name,
    street_name,
    // location: {
    //   type: "Point",
    //   coordinates: coordinates || [0, 0], // Default coordinates
    // }
  };
  const district = await DistrictRepostory.create(newDistrict);
  if (!district) {
    return res.status(400).json({ error: 'Bad Request. District creation failed.' });
  }

  res.status(201).json(district);
};

const getDistricts = async (req, res) => {
  const districts = await DistrictRepostory.getAll();
  res.status(200).json({
    count: districts.length,
    data: districts,
  });
};

const getDistrictById = async (req, res) => {
  const  id  = req.params.id;
  const district = await DistrictRepostory.getById(id);
  if (!district) {
    res.status(404);
    throw new Error('District not found');
  }
  res.status(200).json(district);
};

const updateDistrict = async (req, res) => {
  const id  = req.params.id;
  const { district_name,street_name } = req.body;
  const result = await DistrictRepostory.update(id, { district_name,street_name }, { new: true });
  if (!result) {
    res.status(404);
    throw new Error('District not found');
  }
  res.status(200).json({ message: 'District updated successfully', data: result });
};

const deleteDistrict = async (req, res) => {
  const id  = req.params.id;
  const result = await DistrictRepostory.delete(id);
  if (!result) {
    res.status(404);
    throw new Error('District not found');
  }

  res.status(200).json({ message: 'District deleted successfully', data: result });
};

module.exports = {
  createDistrict,
  getDistricts,
  getDistrictById,
  updateDistrict,
  deleteDistrict,
};
