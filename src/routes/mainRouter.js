const express = require("express");

const route = express.Router();

const renderComponent = require("../utils/renderComponent");

const Homepage = require("../views/pages/Homepage");

const userRouter = require("./userRouter");
const sportRouter = require("./sportRouter");
const matchRouter = require("./matchRouter");
const entryRouter = require("./entryRouter");

route.get("/", (req, res) => {
  const user = req.session?.user;
  renderComponent(Homepage, { user }, res);
});
route.use("/user", userRouter);
route.use("/sport", sportRouter);
route.use("/match", matchRouter);
route.use("/entry", entryRouter);

module.exports = route;
