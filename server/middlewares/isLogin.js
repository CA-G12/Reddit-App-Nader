const jwt = require("jsonwebtoken");

require("dotenv").config();

const isLogin = (req, res, next) => {
  if (!req.cookies["dataUser"]) {
    res.redirect("/login");
  } else {
    jwt.verify(
      req.cookies["dataUser"],
      process.env.SECRET_KEY,
      (err, decode) => {
        res.sendStatus(401);
        if (err) {
        } else {
          next();
        }
      }
    );
  }
};

module.exports = isLogin;
