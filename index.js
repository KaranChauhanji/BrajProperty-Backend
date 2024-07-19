const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const connection = require("./config/db");
const userRouter = require("./routes/user.routes");
const propertyRouter = require("./routes/property.routes");
const reviewRouter = require("./routes/review.routes");

const server = express();

server.use(express.json());
server.use("/user", userRouter);
server.use("/property", propertyRouter);
server.use("/review", reviewRouter);

server.get("/", (_, res) => {
  res.status(201).send("Heath Check Done!");
});

server.listen(PORT, async () => {
  try {
    await connection;
    console.log("Server is running and DB is Connected");
  } catch (error) {
    console.log(error);
  }
});
