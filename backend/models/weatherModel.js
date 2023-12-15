const mongoose =require ("mongoose");


const weatherSchema = new mongoose.Schema({
 weatherType: {
    type: String,
    required: true,
  }
});


const weather = mongoose.model('Weather', weatherSchema);

module.exports=weather;




