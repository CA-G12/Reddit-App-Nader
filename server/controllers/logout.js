const logout = (req, res) => {
    res.clearCookie("dataLogin").redirect("/login");
  };
  module.exports = logout;