const User = require("../models/user");


const register = (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};



const login = (req, res) => {};

const logout = (req, res) => {};

module.exports = { register, login, logout };
