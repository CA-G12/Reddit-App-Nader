const connection = require("../config/connection");

const addPosts = (title, description,userId ) => {
  return connection.query(
    "INSERT INTO posts(title,description,userId) VALUES ($1,$2,$3);",
    [title, description,userId]
  );
};

module.exports = addPosts;
