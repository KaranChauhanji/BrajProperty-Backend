const express = require("express");
const contactSend = require("../controllers/ContactUsReq/contactSend.controller");
const contactUsRouter = express.Router();

contactUsRouter.post("/", contactSend);

module.exports = contactUsRouter;
