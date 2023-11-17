const asyncHandler = require('express-async-handler');
const Street = require('../models/streetModel.js');

const createStreet = asyncHandler(async (req, res) => {
  console.log('The request body is:', req.body);
  const { name } = req.body;

  if (!name) {
    res.status(400);
    throw new Error('All fields are mandatory!');
  }

  const newStreet = {
    name,
  };

  const street = await Street.create(newStreet);

  res.status(201).json(street);
});

const getStreets = asyncHandler(async (req, res) => {
  const streets = await Street.find({});

  res.status(200).json({
    count: streets.length,
    data: streets,
  });
});

const getStreetById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const street = await Street.findById(id);

  if (!street) {
    res.status(404);
    throw new Error('Street not found');
  }

  res.status(200).json(street);
});

const updateStreet = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.status(400);
    throw new Error('All fields are mandatory: name');
  }

  const result = await Street.findByIdAndUpdate(id, { name }, { new: true });

  if (!result) {
    res.status(404);
    throw new Error('Street not found');
  }

  res.status(200).json({ message: 'Street updated successfully', data: result });
});

const deleteStreet = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await Street.findByIdAndDelete(id);

  if (!result) {
    res.status(404);
    throw new Error('Street not found');
  }

  res.status(200).json({ message: 'Street deleted successfully', data: result });
});

module.exports = {
  createStreet,
  getStreets,
  getStreetById,
  updateStreet,
  deleteStreet,
};
