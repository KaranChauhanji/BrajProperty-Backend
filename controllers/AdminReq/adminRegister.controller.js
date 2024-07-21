const bcrypt = require("bcrypt");
const AdminModel = require("../../models/admin.model");


const adminRegister = async (req, res) => {
  const { username, email, password} = req.body;
  const existingAdmin = await AdminModel.findOne({email});

  if(existingAdmin){
    res.status(400).send({message: "User already existed."})
  }

  try {

    bcrypt.hash(password, 2, async (err, hash) => {
      if (err) {
        res
          .status(404)
          .send({ message: `Error in hashing the password: ${err.message}` });
      }

      const newAdmin = new AdminModel({
        username,
        email,
        password: hash,
      });
      await newAdmin.save();

      res
        .status(201)
        .send({ message: `${username} your registration is completed.` });
    });
  } catch (error) {
    res.status(501).send({ message: `Wrong Details: ${error.message}` });
  }
};

module.exports = adminRegister;