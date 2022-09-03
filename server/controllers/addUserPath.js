const path = require("path");

const addUserPath = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "pages", "singup.html")
  );
};

module.exports =addUserPath;
