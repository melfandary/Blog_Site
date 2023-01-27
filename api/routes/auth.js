const express = require("express");
const router = express.Router();

// const cors = require("cors");

const controller = require("../controllers/auth");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/logout", controller.logout);


module.exports = router;
