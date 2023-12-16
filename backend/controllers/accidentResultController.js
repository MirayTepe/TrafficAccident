const AccidentResultRepository = require('../repositories/accidentResultRepository');

const createAccidentResult = async (req, res) => {
    const { deathCount, injuryCount } = req.body;
    const newAccidentResult = {
        deathCount,
        injuryCount,
        // Diğer gerekli alanlar
    };

    const accidentResult = await AccidentResultRepository.create(newAccidentResult);
    res.status(201).json(accidentResult);

};

const getAccidentResults = async (req, res) => {

    const accidentResults = await AccidentResultRepository.getAll();
    res.status(200).json({
        count: accidentResults.length,
        data: accidentResults,
    });

};

const getAccidentResultById = async (req, res) => {
    const id = req.params.id;
    const accidentResult = await AccidentResultRepository.getById(id);
    if (!accidentResult) {
        res.status(404).json({ error: 'AccidentResult not found' });
        return;
    }
    res.status(200).json(accidentResult);


};

const updateAccidentResult = async (req, res) => {
    const id = req.params.id;
    const { deathCount, injuryCount } = req.body;
    const updateData = {
        deathCount,
        injuryCount,
        // Diğer gerekli alanlar
    };
    const result = await AccidentResultRepository.update(id, updateData, { new: true });
    if (!result) {
        res.status(404).json({ error: 'AccidentResult not found' });
        return;
    }
    res.status(200).json({ message: 'AccidentResult updated successfully', data: result });

};

const deleteAccidentResult = async (req, res) => {
    const id = req.params.id;

    const result = await AccidentResultRepository.delete(id);
    if (!result) {
        res.status(404).json({ error: 'AccidentResult not found' });
        return;
    }
    res.status(200).json({ message: 'AccidentResult deleted successfully', data: result });

};

module.exports = {
    createAccidentResult,
    getAccidentResults,
    getAccidentResultById,
    updateAccidentResult,
    deleteAccidentResult,
};
