const ReviewModel = require("../../models/reviews.model");

const reviewGet = async (_, res) => {
  try {
    const review = await ReviewModel.find();

    res.status(200).send(review);
  } catch (error) {
    res
      .status(500)
      .send({ message: `Error in Getting Reviews: ${error.message}` });
  }
};

module.exports = reviewGet;
