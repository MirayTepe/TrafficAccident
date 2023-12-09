const  DriverRepostory= require('../repostories/driverRepostory.js');


const createDriver = async (req, res) => {
    const { firstName,lastName,vehicle,gender  } = req.body;
    const newDriver = {
      firstName,
      lastName,
      vehicle,
      gender 
    };
    const driver = await DriverRepostory.create(newDriver);
    if (!driver) {
      return res.status(400).json({ error: 'Bad Request. Driver creation failed.' });
    }

    res.status(201).json(driver);
};

const getDrivers = async (req, res) => {
  const drivers = await DriverRepostory.getAll();
  res.status(200).json({
    count: drivers.length,
    data: drivers,
  });
};

const getDriverById = async (req, res) => {
  const { id } = req.params;
  const driver = await DriverRepostory.getById(id);
  if (!driver) {
    res.status(404);
    throw new Error('Driver not found');
  }
  res.status(200).json(district);
};

const updateDriver = async (req, res) => {
  const { id } = req.params;
  const { firstName,lastName,vehicle,gender  } = req.body;
  const result = await AccidentRepostory.update(id, {firstName,lastName,vehicle,gender  }, { new: true });
  if (!result) {
    res.status(404);
    throw new Error('Driver not found');
  }
  res.status(200).json({ message: 'District updated successfully', data: result });
};

const deleteDriver = async (req, res) => {
  const { id } = req.params;
  const result = await DriverRepostory.delete(id);
  if (!result) {
    res.status(404);
    throw new Error('Driver not found');
  }

  res.status(200).json({ message: 'Driver deleted successfully', data: result });
};

module.exports = {
  createDriver,
  getDrivers,
  getDriverById,
  updateDriver,
  deleteDriver,
};
