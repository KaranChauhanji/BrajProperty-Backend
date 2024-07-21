const UserModel = require("../../models/user.model");

const userGet = async (_, res) => {
  try {
    const user = await UserModel.find();
    res.status(201).send(user);
  } catch (error) {
    res
      .status(404)
      .send({ message: `Error in getting the user details: ${error.message}` });
  }
};

module.exports = userGet