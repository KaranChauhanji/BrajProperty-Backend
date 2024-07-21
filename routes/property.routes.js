const express = require("express");
const auth = require("../middlewares/auth.middleware");
const propertyAdd = require("../controllers/PropertyReq/propertyAdd.controller");
const propertyGet = require("../controllers/PropertyReq/propertyGet.controller");
const propertyEdit = require("../controllers/PropertyReq/propertyEdit.controller");
const propertyDelete = require("../controllers/PropertyReq/propertyDelete.controller");
// const roleCheck = require("../middlewares/role.middleware");
const propertyRouter = express.Router();

propertyRouter.get("/", propertyGet);

propertyRouter.post("/add", auth, propertyAdd);

propertyRouter.patch("/edit/:id", auth, propertyEdit);

propertyRouter.delete("/delete/:id", auth, propertyDelete);

module.exports = propertyRouter;
