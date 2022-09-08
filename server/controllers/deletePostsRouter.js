const deletePosts = require("../database/queries/deletePosts");

const deletePostsRouter = (req, res, next) => {
  // userId,postsId
  const postsId = req.body.postId;
  const userId = req.user.id;
  console.log(postsId);
  console.log(userId);
  deletePosts(userId,postsId)
    .then((data) => {
      res.send({msg:"success"})
      next();
    })
    .catch((err) => {
      res.send({msg:"Error"})
      console.log(err);
    });
};

module.exports = deletePostsRouter;
