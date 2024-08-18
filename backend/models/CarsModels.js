const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  modelName: { type: String, required: false },
  vehicleType: { type: String, required: false },
  make: { type: String, required: false },
  modelYear: { type: Number, required: false },
  fuelType: { type: String, required: false },
  price: { type: Number, required: false },
  bodyStyle: { type: String, required: false },
  transmission: { type: String, required: false },
  image: { type: String }  // Path to the uploaded image
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
