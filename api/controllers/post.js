const Blog = require("../models/blog");
const cors = require("cors");

const getAllBlogs = (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSpecficBlog = (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addBlog = (req, res) => {
  const blog = new Blog({
 
    title: "Blog six",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit",
    img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};


const updateBlog = (req, res) => {

};


const deleteBlog = (req, res) => {

};


module.exports = { getAllBlogs, getSpecficBlog, addBlog ,updateBlog, deleteBlog };
