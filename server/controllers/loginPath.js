const path = require("path");

const loginpath = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "pages", "login.html")
  );
};

module.exports = loginpath;
