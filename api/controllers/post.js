const Blog = require("../models/blog");

// const getAllBlogs = async (req, res) => {
//   // var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

//   if (req.query.cat) {
//     await Blog.find({ category: req.query.cat })
//       .then((result) => {
//         res.json(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     await Blog.find()
//       .then((result) => {
//         res.json(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//};

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
  const blog = new Blog({
    title: req.body.title,
    desc: req.body.desc,
    img: req.body.img,
    category: req.body.cat,
    creator: req.body.creator,
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

const updateBlog = (req, res) => {
  Blog.updateOne({ _id: req.params.id })
    .then((result) => {
      res.json("Blog Updated");
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteBlog = (req, res) => {
  Blog.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json("Blog Deleted");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getSpecficBlog,
  addBlog,
  updateBlog,
  deleteBlog,
};
