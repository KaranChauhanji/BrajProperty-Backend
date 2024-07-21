const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  phone: { type: Number, required: true, unique: true }
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
