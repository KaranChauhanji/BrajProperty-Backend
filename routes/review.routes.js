const express = require("express");
// const auth = require("../middlewares/auth.middleware");
const reviewAdd = require("../controllers/ReviewReq/reviewAdd.controller");
const reviewGet = require("../controllers/ReviewReq/reviewGet.controller");
const reviewRouter = express.Router();

reviewRouter.post("/add", reviewAdd);

reviewRouter.get("/", reviewGet);

module.exports = reviewRouter;
