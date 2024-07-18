const bcrypt = require("bcrypt");
const UserModel = require("../../models/user.model");

const userRegister = async (req, res) => {
  const { username, email, password, role, phone } = req.body;
  const existingUser = await UserModel.findOne({email});

  if(existingUser){
    res.status(400).send({message: "User already existed."})
  }

  try {

    bcrypt.hash(password, 2, async (err, hash) => {
      if (err) {
        res
          .status(404)
          .send({ message: `Error in hashing the password: ${err.message}` });
      }

      const user = new UserModel({
        username,
        email,
        password: hash,
        role,
        phone,
      });
      await user.save();

      res
        .status(201)
        .send({ message: `${username} your registration is completed.` });
    });
  } catch (error) {
    res.status(501).send({ message: `Wrong Details: ${error.message}` });
  }
};

module.exports = userRegister;
