const path = require("path");

const homePagePath = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "pages", "homePage.html")
  );
};

module.exports =homePagePath;