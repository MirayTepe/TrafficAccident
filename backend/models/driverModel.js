const mongoose =require ("mongoose");


const driverSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  
  },
  lastName: {
    type: String,
    required: true,
  
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true,
  },
  gender:{
    type:String,
    required: true
  }

  // Diğer gerekli alanlar
});


const driver = mongoose.model('Driver', driverSchema);

module.exports=driver;




