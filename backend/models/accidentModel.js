const mongoose =require ("mongoose");

const accidentSchema = new mongoose.Schema({
  district: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'District',
    required: true,
  },
  date: {
    type: Date,
    required: true,
     get: (value) => {
     return new Date(value).toLocaleDateString("DD-MM-YYYY"); 
     },
  },
  time: {
    type: String,
    required: true,
  },
  // reasons: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Reason',
  // }],
  reason:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reason',
    required: true,
  }

  // Diğer gerekli alanlar
});

const Accident = mongoose.model('Accident', accidentSchema);

module.exports=Accident;