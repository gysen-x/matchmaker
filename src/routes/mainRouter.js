const express = require("express");

const route = express.Router();

const userRouter = require('./userRouter');
const sportRouter = require('./sportRouter');
const matchRouter = require('./matchRouter');
const entryRouter = require('./entryRouter')

route.use('/user', userRouter);
route.use('/sport', sportRouter);
route.use('/match', matchRouter);
route.use('/entry', entryRouter)

module.exports = route;
