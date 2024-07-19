const ReviewModel = require("../../models/reviews.model");

const reviewAdd = async (req, res) => {
  const data = req.body;
  try {
    const newReview = new ReviewModel(data);
    await newReview.save();

    res
      .status(200)
      .send({ message: "Review Added Successfully.", Review: newReview });
  } catch (error) {
    res
      .status(500)
      .send({ message: `Error in Adding Review: ${error.message}` });
  }
};

module.exports = reviewAdd;
