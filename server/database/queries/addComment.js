const connection = require("../config/connection");


const addComment = (comments, postsId,userId ) => {
    return connection.query(
      "INSERT INTO comment(comments,postsId,userId) VALUES ($1,$2,$3);",
      [comments, postsId,userId]
    );
  };
  
  module.exports = addComment;
