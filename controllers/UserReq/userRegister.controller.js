const UserModel = require("../../models/user.model");

const userRegister = async (req, res) => {
  const { username, phone } = req.body;
  const existingUser = await UserModel.findOne({ phone });

  if (existingUser) {
   return res.status(400).send({ message: "User already existed." });
  }

  try {
    const user = new UserModel({
      username,
      phone,
    });
    await user.save();

    res
      .status(201)
      .send({ message: `${username} your registration is completed.` });
  } catch (error) {
    res.status(501).send({ message: `Wrong Details: ${error.message}` });
  }
};

module.exports = userRegister;
