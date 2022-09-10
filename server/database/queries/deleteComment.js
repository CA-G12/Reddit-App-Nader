const connection = require("../config/connection");

const deleteComment = (commentId, userId) => {
  return connection.query(
    "delete from comment where comment.commentId = $1 AND comment.userId = $2",
    [commentId, userId]
  );
};

module.exports = deleteComment;
