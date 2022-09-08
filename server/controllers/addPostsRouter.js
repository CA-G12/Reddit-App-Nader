const addPosts = require("../database/queries/addPosts");

const addPostsRouter = (req, res) => {
//   console.log(req.user.id);
//   console.log(req.body);
  const { title, description } = req.body;
  const userId = req.user.id;

  addPosts(title, description, userId)
    .then((data) => {
      res.redirect("/homePage");
    })
    .catch((err)=> 
    console.log(err));
    // res.json({err : "server error"}))    
};

module.exports = addPostsRouter;
