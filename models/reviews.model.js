const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  username: { type: String, required: true, default: "Anonymous" },
  feedback: { type: String, required: true },
  rating: { type: Number, required: true, enum: [1, 2, 3, 4, 5], default: 4 },
});

const ReviewModel = mongoose.model("review", reviewSchema);

module.exports = ReviewModel;
