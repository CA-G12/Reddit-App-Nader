const { verify, decode } = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const { dataLogin } = req.cookies;
  if (dataLogin) {
    verify(dataLogin, process.env.SECRET_KEY, (error, decode) => {
      if (error) {
        res.redirect("/login");
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

module.exports = verifyToken;
