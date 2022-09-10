const logout = (req, res, next) => {
  res
    .clearCookie("dataLogin")
    .clearCookie("userName")
    .clearCookie("userId")
    .redirect("/login");
};
module.exports = logout;

// "userName","userId"
