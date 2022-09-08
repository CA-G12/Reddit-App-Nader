const addUserRouter = require("./addUserRouter");
const addUserPath = require("./addUserPath");
const loginpath = require("./loginPath");
const homePagePath = require("./homePagePath");
const getAllPost = require("./getAllPosts");
const loginVerify = require("./loginValidation");
const logout = require("./logout");
const addPostsRouter = require("./addPostsRouter");
module.exports = {
  addUserRouter,
  addUserPath,
  loginpath,
  homePagePath,
  getAllPost,
  loginVerify,
  logout,
  addPostsRouter
};
