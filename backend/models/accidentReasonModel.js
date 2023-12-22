const mongoose =require ("mongoose");


const accidentReasonSchema = new mongoose.Schema({

  accident: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Accident',
    required: true,
  },
  Reason: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reason',
    required: true,
  },
  
});


const AccidentReason = mongoose.model('AccidentReason', accidentReasonSchema);

module.exports=AccidentReason;




