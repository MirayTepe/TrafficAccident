const mongoose =require ("mongoose");


const vehicleSchema = new mongoose.Schema({
 vehicleType: {
    type: String,
    required: true,
  },
  vehicleAge: {
    type: String,
    required: true,
  },
  vehicleInspection:{
    type: String,
    enum: ['Var', 'Yok'],
  } ,
 
  speed :{
    speed: {
      type: Number, 
    }
  }
});


const vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports=vehicle;




