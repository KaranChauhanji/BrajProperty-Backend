const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = AdminModel;
