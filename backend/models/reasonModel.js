const mongoose =require ("mongoose");


const reasonSchema = new mongoose.Schema({
  reasonDetail: {
    type: String,
    required: true,

  
  },
  // Diğer gerekli alanlar
});


const reason = mongoose.model('Reason', reasonSchema);

module.exports=reason;




