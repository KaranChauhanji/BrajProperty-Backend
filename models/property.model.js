const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  img: { type: [], required: true },
  propertyName: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  details: { type: String, required: true },
  price: { type: Number, required: true },
  pdfLink: { type: String, required: true }
});

const PropertyModel = mongoose.model("property", propertySchema);

module.exports = PropertyModel;
