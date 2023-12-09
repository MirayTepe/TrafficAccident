const District = require('../models/districtModel');

const setDistrictInRequest = async (req, res, next) => {
 
    const districtId = req.params.district_id; // Örnek: route parametresinden alınan street_id
    const district = await District.findById(districtId);

    if (!district) {
      return res.status(404).json({ message: 'Street not found' });
    }

    req.district = district; // req nesnesine street'i ekleyin
    next(); // Bir sonraki middleware'e geçin veya işlevi devam ettirin

};

module.exports = setDistrictInRequest;
