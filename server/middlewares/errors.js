const path = require("path");


const clientErrors = (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "..","..", "public","pages","errors", "404.html"));
};

const serverError = (err, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, "..","..","public","pages","errors", "500.html"));
};

module.exports = {serverError, clientErrors};