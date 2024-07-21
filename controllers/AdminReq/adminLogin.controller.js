const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AdminModel = require("../../models/admin.model");
require("dotenv").config();

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await AdminModel.findOne({ email });

    bcrypt.compare(password, admin.password, async (err, result) => {
      if (err) {
        res
          .status(404)
          .send({ message: `Error in comparing password: ${err}` });
      }

      if (result) {
        const token = jwt.sign(
          {
            username: admin.username,
            email: admin.email,
            userId: admin._id,
          },
          process.env.JWT_SECRET
        );

        res.status(201).send({
          message: `Welcome your Login is Successful.`,
          token: token,
        });
      }
    });
  } catch (error) {
    res.status(501).send({ message: `Wrong Credentials ${error.message}` });
  }
};

module.exports = adminLogin;
