const connection = require("../config/connection");

const addUser = ({ username, email, password, imgUrl }) => {
  return connection.query(
    "INSERT INTO users(username,email,password,imgUrl) VALUES ($1,$2,$3,$4);",
    [username, email, password, imgUrl]
  );
};

module.exports = addUser;
