const deleteComment = require("../database/queries/deleteComment");

const deleteCommentRouter = (req, res, next) => {
  const { commentId, userId } = req.body;

  deleteComment(commentId, userId)
    .then((data) => {
      res.send({ msg: "success" });
      next();
    })
    .catch((err) => {
      res.send({ msg: "Error" });
    });
};

module.exports = deleteCommentRouter;
