const connection = require("../config/connection");

const getUser = ({email, password}) => {
  return connection.query(
    "select email,password from users where email = $1 or password = $2 limit 1",
    [email, password]
  );
};

module.exports = getUser;

