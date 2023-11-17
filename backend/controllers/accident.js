const asyncHandler=require ("express-async-handler");
const  Accident  =require ("../models/accidentModel.js");

//@desc Get all accidents
//@route GET /api/accidents
//@access private
const getAccidents =async (req, res) => {
  const accidents = await Accident.find({ street_id: req.street.id });
  res.status(200).json(accidents);
};

//@desc Create New accident
//@route POST /api/accidents
//@access private
const createAccident = async (req, res) => {
  console.log("The request body is :", req.body);
  const { street_id, reason_id, date } = req.body;
  if (!street_id || !reason_id || !date) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const accident = await Accident.create({
    street_id: req.street.id,
    reason_id: req.reason.id,
    date,
  });

  res.status(201).json(accident);
};

//@desc Get accident
//@route GET /api/accidents/:id
//@access private
const getAccident =asyncHandler(async (req, res) => {
  const accident = await Accident.findById(req.params.id);
  if (!accident) {
    res.status(404);
    throw new Error("Accident not found");
  }
  res.status(200).json(accident);
});

//@desc Update accident
//@route PUT /api/accidents/:id
//@access private
const updateAccident = asyncHandler(async (req, res) => {
  const accident = await Accident.findById(req.params.id);
  if (!accident) {
    res.status(404);
    throw new Error("Accident not found");
  }

  if (accident.street_id.toString() !== req.street.id) {
    res.status(403);
    throw new Error("User doesn't have permission to update other accidents");
  }

  const updatedAccident = await Accident.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedAccident);
});

//@desc Delete accident
//@route DELETE /api/accidents/:id
//@access private
const deleteAccident = asyncHandler(async (req, res) => {
  const accident = await Accident.findById(req.params.id);
  if (!accident) {
    res.status(404);
    throw new Error("Accident not found");
  }
  if (accident.street_id.toString() !== req.street.id) {
    res.status(403);
    throw new Error("User doesn't have permission to delete the accident");
  }
  await Accident.deleteOne({ _id: req.params.id });
  res.status(200).json(accident);
});

module.exports = {
  getAccidents,
  createAccident,
  getAccident,
  updateAccident,
  deleteAccident,
};
