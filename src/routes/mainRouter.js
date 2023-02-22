const express = require("express");

const route = express.Router();

const renderComponent = require("../utils/renderComponent");

const Homepage = require("../views/pages/Homepage");

const sportController = require("../controllers/sportController");

const userRouter = require("./userRouter");
const sportRouter = require("./sportRouter");
const matchRouter = require("./matchRouter");
const entryRouter = require("./entryRouter");
const contactRouter = require("./contactRouter");

route.get("/", async (req, res) => {
  const user = req.session?.user;
  const sports = await sportController.showSports(req, res);
  renderComponent(Homepage, { user, sports }, res);
});
route.use("/user", userRouter);
route.use("/sport", sportRouter);
route.use("/match", matchRouter);
route.use("/entry", entryRouter);
route.use("/contacts", contactRouter);

module.exports = route;
