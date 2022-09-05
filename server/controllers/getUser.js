const bcrypt = require("bcryptjs");
const getUser = require("../database/queries/getUser");

const getUserRouter = (req, res) => {
  const { email, password } = req.body;
  getUser({ email, password })
    .then((data) => {
        // console.log(data.rows);
        res.redirect("/homePage");
    })
    .catch((err) => console.log(err));
};

module.exports =getUserRouter;
