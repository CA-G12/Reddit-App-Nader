const express = require("express");

const app = express();

const { join } = require("path");

const compression = require("compression");
const cookieParser = require("cookie-parser");

const router = require("./router");

app.set("port", process.env.PORT || 4000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.use(express.static(join(__dirname, "..", "public")));
app.use(router);

module.exports = app;
