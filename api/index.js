const express = require("express");
const app = express(express.json); // for the database?

const Blog = require("./models/blog");

const db = require("./databaseConnection");

const port = 5000;

app.listen(port, () => {
  console.log("listening..");

  db.loadDb();

  // allow  cross origin resource share
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  // retreives all blogs.
  app.get("/", (req, res) => {
    Blog.find()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //retreives a single blog
  app.get("/blog/:id", (req, res) => {
    Blog.findById(req.params.id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //adds a new blog and saves it to the database.
  app.get("/add-blog", (req, res) => {
    const blog = new Blog({
      title: "Blog Three",
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
  });

  // app.get('/blogs',(req,res)=>{
  // Blog.find() .then((result) => {
  //         res.render('');
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  // });
});
