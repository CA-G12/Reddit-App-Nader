const getAllPosts = require("../database/queries/getAllPosts");

const getAllPost = (req, res) => {
  getAllPosts()
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err));
};
module.exports = getAllPost;
