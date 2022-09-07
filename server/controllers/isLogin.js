require("env2")(".env");
const jwt = require("jsonwebtoken");


const isLogin = (req, res, next) => {
  if (!req.cookies["dataLogin"]) {
    res.redirect("/login");
  } else {
    jwt.verify(
      req.cookies["dataLogin"],
      process.env.SECRET_KEY,
      (err, decode) => {
        res.sendStatus(401);
        if (err) {
        } else {
          res.send(decode)
          next();
        }
      }
    );
  }
};

module.exports = isLogin;
