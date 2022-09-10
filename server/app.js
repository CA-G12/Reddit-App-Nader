const express = require("express");

const app = express();

const { join } = require("path");

const compression = require("compression");
const cookieParser = require("cookie-parser");

const router = require("./router");

const { serverError, clientErrors } = require("./middlewares/errors");

app.set("port", process.env.PORT || 4000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.use(express.static(join(__dirname, "..", "public")));
app.use(router);

app.get("/500", (req, res) => {
    throw new Error("Error");
  });

app.use(clientErrors);
app.use(serverError);

module.exports = app;







