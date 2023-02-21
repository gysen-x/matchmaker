require("dotenv").config();
require("@babel/register");
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const path = require("path");
const FileStore = require("session-file-store")(session);
const { PORT, SECRET_COOKIE } = process.env;

const mainRouter = require("./routes/mainRouter");

const app = express();
app.use(express.static(path.resolve("public")));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: "NewCookie",
  store: new FileStore(),
  secret: SECRET_COOKIE,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 99999999 * 24 * 60,
    httpOnly: true,
  },
};

// app.use(session(sessionConfig));

app.use("/", mainRouter);

async function start() {
  try {
    app.listen(PORT, () =>
      console.log(`Server is up. http://localhost:${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
}

start();
