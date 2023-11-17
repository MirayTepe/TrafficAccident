const mongoose =require ("mongoose");

const accidentSchema = new mongoose.Schema({
  street_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Street',
    required: [true, "Please add the street id"],
  },
  date: {
    type: Date,
    required:  [true, "Please add the accident date"],
  },
  reason_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reason',
    required: [true, "Please add the accident reason"],
  },
  // Diğer gerekli alanlar
});

const Accident = mongoose.model('Accident', accidentSchema);

module.exports=Accident;