const bcrypt = require("bcryptjs");

const addUser = require("../database/queries/addUser");

const signupValidation = require("./signupValidation");

const addUserRouter = (req, res) => {
  const validate = signupValidation(req);
  if (validate.error) {
    res.send({ msg: validate.error.message }); // message
  } else {
    const { username, email, password, imgUrl } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
      const password = hash;
      addUser({ username, email, password, imgUrl }).then((data) => {
        // res.redirect("/login");.
        res.json(data)
      });
    });
  }
};

module.exports = addUserRouter;
