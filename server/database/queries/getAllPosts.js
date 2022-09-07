const connection = require("../config/connection");

const getAllPosts = () => {
  return connection.query(
    "SELECT posts.postsId, posts.title,posts.description,posts.userId,users.username,users.imgUrl ,JSON_AGG(comment.*) AS comments FROM  posts  INNER JOIN comment on  comment.postsId = posts.postsId INNER JOIN users on  users.id = posts.userid  GROUP  BY posts.postsId ,users.username ,users.imgUrl"
    );
  };
  // "SELECT posts.postsId, posts.title,posts.description,posts.userId, JSON_AGG(comment.*) AS comments FROM  posts INNER JOIN comment on  comment.postsId = posts.postsId INNER JOIN users on  users.id = posts.userid  GROUP  BY posts.postsId"
  // "SELECT posts.postsId, posts.title,posts.description, JSON_AGG(comment.*) AS comments FROM  posts INNER JOIN comment ON comment.postsId = posts.postsId  GROUP  BY posts.postsId"
// ALL posts 
// SELECT posts.postsId, posts.title,posts.description, JSON_AGG(comment.*) AS comments FROM  posts LEFT JOIN comment ON comment.postsId = posts.postsId  GROUP  BY posts.postsId
module.exports = getAllPosts;
