const asyncHandler = require("express-async-handler");
const Reason = require("../models/reasonModel.js");

const createReason = asyncHandler(async (req, res) => {
  console.log('The request body is:', req.body);
  const { reasonDetail } = req.body;

  if (!reasonDetail) {
    res.status(400);
    throw new Error('All fields are mandatory: reasonDetail');
  }

  const newReason = {
    reasonDetail,
  };

  const reason = await Reason.create(newReason);

  res.status(201).json(reason);
});

const getReasons = asyncHandler(async (req, res) => {
  try {
    const reasons = await Reason.find({});

    return res.status(200).json({
      count: reasons.length,
      data: reasons,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

const getReasonById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const reason = await Reason.findById(id);

    if (!reason) {
      res.status(404);
      throw new Error('Reason not found');
    }

    res.status(200).json(reason);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

const updateReason = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { reasonDetail } = req.body;

  if (!reasonDetail) {
    res.status(400);
    throw new Error('All fields are mandatory: reasonDetail');
  }

  const result = await Reason.findByIdAndUpdate(id, { reasonDetail }, { new: true });

  if (!result) {
    res.status(404);
    throw new Error('Reason not found');
  }

  res.status(200).json({ message: 'Reason updated successfully', data: result });
});

const deleteReason = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await Reason.findByIdAndDelete(id);

  if (!result) {
    res.status(404);
    throw new Error('Reason not found');
  }

  res.status(200).json({ message: 'Reason deleted successfully', data: result });
});

module.exports = {
  createReason,
  getReasons,
  getReasonById,
  updateReason,
  deleteReason,
};
