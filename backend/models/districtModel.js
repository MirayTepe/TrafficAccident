const mongoose =require ("mongoose");


const districtSchema = new mongoose.Schema({
  districtName: {
    type: String,
    required: true,
    unique: true,
  },
  streetName: {
    type: String,
    required: true,
    unique: true,
  },
  // location: {
  //   type: {
  //     type: String,
  //     enum: ["Point"],
  //     required: true,
  //   },
  //   coordinates: {
  //     type: [Number],
  //     required: true,
  //   },
  //}

  // Diğer gerekli alanlar
});
//districtSchema.index({ location: "2dsphere" });

const district = mongoose.model('District', districtSchema);

module.exports=district;


