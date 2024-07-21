require("dotenv").config();
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    res.status(404).send({ message: "You are not Authorized." });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(404).send(`Error in verifying the token: ${err.message}`);
      }

      req.body.username = decode.username;
      req.body.email = decode.email;
      req.body.userId = decode.userId;

      next();
    });
  } catch (error) {
    res.status(501).send({ message: error.message });
  }
};


module.exports = auth