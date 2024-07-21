const express = require("express");
const contactSend = require("../controllers/ContactUsReq/contactSend.controller");
const contactGet = require("../controllers/ContactUsReq/contactGet.controller");
const contactUsRouter = express.Router();

contactUsRouter.get("/", contactGet);
contactUsRouter.post("/", contactSend);

module.exports = contactUsRouter;
