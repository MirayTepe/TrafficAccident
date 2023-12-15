const  VehicleRepostory= require('../repostories/vehicleRepository.js');


const createVehicle = async (req, res) => {
    const { vehicleType,vehicleAge,vehicleInspection } = req.body;
    const newVehicle = {
      vehicleType,
      vehicleAge,
      vehicleInspection
    };
    const vehicle = await VehicleRepostory.create(newVehicle);
    if (!accident) {
      return res.status(400).json({ error: 'Bad Request. Vehicle creation failed.' });
    }

    res.status(201).json(vehicle);
};

const getVehicles = async (req, res) => {
  const vehicles = await VehicleRepostory.getAll();
  res.status(200).json({
    count: vehicles.length,
    data:vehicles,
  });
};

const getVehicleById = async (req, res) => {
  const  id = req.params.id;
  const vehicle = await VehicleRepostory.getById(id);
  if (!vehicle) {
    res.status(404);
    throw new Error('Vehicle not found');
  }
  res.status(200).json(vehicle);
};

const updateVehicle = async (req, res) => {
  const  id = req.params.id;
  const {vehicleType,vehicleAge,vehicleInspection } = req.body;
  const result = await VehicleRepostory.update(id, {vehicleType,vehicleAge,vehicleInspection }, { new: true });
  if (!result) {
    res.status(404);
    throw new Error('Vehicle not found');
  }
  res.status(200).json({ message: 'Vehicle updated successfully', data: result });
};

const deleteVehicle = async (req, res) => {
  const  id = req.params.id;
  const result = await DriverRepostory.delete(id);
  if (!result) {
    res.status(404);
    throw new Error('Vehicle not found');
  }

  res.status(200).json({ message: 'Vehicle deleted successfully', data: result });
};

module.exports = {
  createVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};
