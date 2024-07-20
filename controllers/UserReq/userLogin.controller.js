// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const UserModel = require("../../models/user.model");
// require("dotenv").config();

// const userLogin = async (req, res) => {
//   const { phone } = req.body;

//   try {
//     const user = await UserModel.findOne({ phone });

//     if(user.role !== "admin"){
//        return res.status(403).send({message:"You are not authorized"})
//     }
    
//     res.status(201).send({
//     message: `Welcome your Login is Successful.`,
//       token: token,
//     });
//   } catch (error) {
//     res.status(501).send({ message: `Wrong Credentials ${error.message}` });
//   }
// };

// module.exports = userLogin;
