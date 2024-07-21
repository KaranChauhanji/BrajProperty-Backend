const express = require("express");
const adminLogin = require("../controllers/AdminReq/adminLogin.controller");
const adminRegister = require("../controllers/AdminReq/adminRegister.controller");
const adminRouter = express.Router();

adminRouter.post("/register", adminRegister);
adminRouter.post("/login", adminLogin);

module.exports = adminRouter;
