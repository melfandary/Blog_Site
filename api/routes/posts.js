const express = require("express");
const router = express.Router();

const controller = require("../controllers/post");

//router.get("/", controller.getAllBlogs);
router.get("/:id", controller.getSpecficBlog);
router.post("/addBlog", controller.addBlog);
router.update("/:id", controller.updateBlog);
router.delete("/:id",controller.deleteBlog);

module.exports = router;
