const Blog = require("../models/blog");
// const cors = require("cors");

const getAllBlogs = (req, res) => {
  Blog.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCategory = (req, res) => {
  Blog.find({ category: req.body.cat })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSpecficBlog = (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};




const addBlog = (req, res) => {
   const blog =  new Blog({
    title: "Blog three",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit",
    img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "food",
  });
  blog
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateBlog = (req, res) => {};

const deleteBlog = (req, res) => {};

module.exports = {
  getAllBlogs,
  getCategory,
  getSpecficBlog,
  addBlog,
  updateBlog,
  deleteBlog,

};
