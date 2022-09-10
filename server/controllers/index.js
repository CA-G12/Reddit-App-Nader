const addUserRouter = require("./addUserRouter");
const addUserPath = require("./addUserPath");
const loginpath = require("./loginPath");
const homePagePath = require("./homePagePath");
const getAllPost = require("./getAllPosts");
const loginVerify = require("./loginValidation");
const logout = require("./logout");
const addPostsRouter = require("./addPostsRouter");
const addCommentRouter = require("./addCommentRouter");
const deletePostsRouter = require("./deletePostsRouter");
module.exports = {
  addUserRouter,
  addUserPath,
  loginpath,
  homePagePath,
  getAllPost,
  loginVerify,
  logout,
  addPostsRouter,
  deletePostsRouter,
  addCommentRouter
};
