const express = require("express");
const userRegister = require("../controllers/UserReq/userRegister.controller");
// const userLogin = require("../controllers/UserReq/userLogin.controller");
const userRouter = express.Router();

userRouter.post("/register", userRegister);

// userRouter.post("/login", userLogin);



module.exports = userRouter;
