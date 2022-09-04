const bcrypt = require("bcryptjs");


const addUser = require("../database/queries/addUser");

const addUserRouter = (req, res) => {
  const { username, email, password, imgUrl } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    const password = hash;
    addUser({ username, email, password, imgUrl })
      .then((data) => {
        res.redirect("/login");
      })
      .catch((err) => console.log(err));
  });
};


module.exports = addUserRouter;
