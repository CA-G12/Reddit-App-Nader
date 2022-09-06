require("dotenv").config();
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const loginValdation = require("../database/queries/loginValidation");

const loginVerify = (req, res) => {
  const passSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(6)
      .required(),
  });

  const someThink = passSchema.validate(req.body);
  if (someThink.error) {
    res.send({ msg: someThink.error.details[0].message });
  } else {
    const loginPassword = req.body["password"];
    loginValdation(req.body).then((data) => {
      if (data.rows.length > 0) {
        const login = data.rows[0];
        bcrypt.compare(loginPassword, login.password, (error, data) => {
          if (error) {
            res.send({ msg: 500 });
          } else {
            if (!data) {
              res.send({ msg: "wrong password" });
            } else {
              jwt.sign(login),
                process.env.SECRET_KEY,
                { algorithm: "HS256" },
                (error, encodedData) => {
                  if (error) {
                    res.send({ msg: 500 });
                  } else {
                    res
                      .cookie("dataLogin", encodedData)
                      .send({ sucss: "success" });
                  }
                };
            }
          }
        });
      }
    });
  }
};

module.exports = loginVerify;
