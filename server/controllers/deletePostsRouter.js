const deletePosts = require("../database/queries/deletePosts");

const deletePostsRouter = (req, res, next) => {
  const postsId = req.body.postId;
  const userId = req.user.id;
  deletePosts(userId,postsId)
    .then((data) => {
      res.send({msg:"success"})
      next();
    })
    .catch((err) => {
      res.send({msg:"Error"})
    });
};

module.exports = deletePostsRouter;
