const mongoose = require("mongoose");

const contactUsSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true },
  message: { type: String },
  address: { type: String, required: true },
});

const ContactUsModel = mongoose.model("contact", contactUsSchema);

module.exports = ContactUsModel;
