const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  role: { type: String, required: true, enum: ["admin", "user"], default: "user" },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
