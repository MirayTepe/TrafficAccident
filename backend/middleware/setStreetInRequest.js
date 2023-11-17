const Street = require('../models/streetModel');

const setStreetInRequest = async (req, res, next) => {
  try {
    const streetId = req.params.street_id; // Örnek: route parametresinden alınan street_id
    const street = await Street.findById(streetId);

    if (!street) {
      return res.status(404).json({ message: 'Street not found' });
    }

    req.street = street; // req nesnesine street'i ekleyin
    next(); // Bir sonraki middleware'e geçin veya işlevi devam ettirin
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = setStreetInRequest;
