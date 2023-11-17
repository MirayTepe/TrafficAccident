const Reason = require('../models/reasonModel');

const setReasonInRequest = async (req, res, next) => {
  try {
    const reasonId = req.params.reason_id; // Örnek: route parametresinden alınan reason_id
    const reason = await Reason.findById(reasonId);

    if (!reason) {
      return res.status(404).json({ message: 'Reason not found' });
    }

    req.reason = reason; // req nesnesine reason'ı ekleyin
    next(); // Bir sonraki middleware'e geçin veya işlevi devam ettirin
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = setReasonInRequest;
