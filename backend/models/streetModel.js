const mongoose =require ("mongoose");


const streetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // Diğer gerekli alanlar
});

const street = mongoose.model('Street', streetSchema);

module.exports=street;


