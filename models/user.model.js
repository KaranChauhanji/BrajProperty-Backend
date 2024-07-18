const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, require: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
