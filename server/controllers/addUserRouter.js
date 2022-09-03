const path = require("path");

const addUser = require("../database/queries/addUser");
// console.log(data);
const addUserRouter = (req, res) => {
    const { username, email, password, imgUrl } = req.body;
  addUser({ username, email, password, imgUrl }).then((data) =>{
    console.log(data);
    res.redirect('/login');
  }).catch((err) => console.log(err))
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "pages", "singup.html")
  );
};

module.exports = addUserRouter;
