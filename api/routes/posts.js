const express = require("express");
const router = express.Router();
const cors = require("cors");

const controller = require("../controllers/post");


//router.get("/", cors(), controller.getAllBlogs);
router.get("/:id", controller.getSpecficBlog);
router.get("/addBlog", controller.addBlog);

module.exports = router;
