const connection = require("../config/connection");

const loginValdation = ({ email }) => {
  return connection.query("select * from users where email = $1", [email]);
};

module.exports = loginValdation;
