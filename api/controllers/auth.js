// const { findOne } = require("../models/user");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register  = async (req, res) => {
 
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const checkexisting = await User.findOne({ email: req.body.email });
if (checkexisting){
  
  return res.status(403).json("E-mail already in use!"); // this allows async but no err handle
}

  // User.findOne({ email: req.body.email }, function (err, result) {
  //   if (err) return console.log(err);
  //   if (result) {
  //     return res.status(403).json("E-mail already in use!");
  //   }
  // });

  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: hash,
  });

  user
    .save()
    .then(() => {
      console.log("User created!");
      return res.status(200).json("User created!");
    })
    .catch((err) => {
      console.log(err);
      return res.status(424).json("User creation failed!"); //unsure of status code.
    });
};

const login = (req, res) => {
  const name = req.body.username;
  const pass = req.body.password;

  User.findOne({ username: name }, function (err, user) {
    if (!user) {
      return res.status(404).send("User doesnt exist");
    } else if (user) {
     

      const isPasswordCorrect = bcrypt.compareSync(pass, user.password);

      if (!isPasswordCorrect) {
        return res.status(400).send("Incorrect username or password!");
      }

      const token = jwt.sign({ id: user._id }, "jwtKey");
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .send(user);
    }
  });
};

const logout = (req, res) => { // cookie doesnt reset cuz its not json , if json login fails
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true,
  }).status(200).json("Logged out");
};

module.exports = { register, login, logout };
