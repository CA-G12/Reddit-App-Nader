require("env2")(".env");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const loginValdation = require("../database/queries/loginValidation");

// console.log(process.env.SECRET_KEY);
const loginVerify = (req, res) => {
  const passSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(6)
      .required(),
  });

  const someThink = passSchema.validate(req.body);
  if (someThink.error || !someThink) {
    res.send({ msg: someThink.error.details[0].message });
  } else {
    const loginPassword = req.body["password"];
    loginValdation(req.body)
      .then((data) => {
        if (data.rows.length > 0) {
          const login = data.rows[0];
          bcrypt.compare(loginPassword, login.password, (error, result) => {
            if (error) {
              res.send({ msg: 500 });
            } else {
              if (!result) {
                res.send({ msg: "wrong password" });
              } else {
                jwt.sign(
                  login,
                  process.env.SECRET_KEY,
                  { algorithm: "HS256" },
                  (error, encodedData) => {
                    if (error) {
                      res.send({ msg: 500 });
                    } else {
                      res.cookie("userId", data.rows[0].id);
                      res.cookie("userName", data.rows[0].username);
                      res
                        .cookie("dataLogin", encodedData)
                        .send({ sucss: "success" });
                    }
                  }
                );
              }
            }
          });
        }else{
          console.log("Error");
          res.send({ msg: "wrong Email" });
        }
      })
      .catch((error) => console.log(error));
  }
};

module.exports = loginVerify;
