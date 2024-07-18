const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../../models/user.model");
require("dotenv").config();

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        res
          .status(404)
          .send({ message: `Error in comparing password: ${err}` });
      }

      if (result) {
        const token = jwt.sign(
          {
            username: user.username,
            email: user.email,
            phone: user.phone,
            role: user.role,
            userId: user._id,
          },
          process.env.JWT_SECRET
        );

        res
          .status(201)
          .send({
            message: `Welcome your Login is Successful.`,
            token: token,
          });
      }
    });
  } catch (error) {
    res.status(501).send({ message: `Wrong Credentials ${error.message}` });
  }
};

module.exports = userLogin;
