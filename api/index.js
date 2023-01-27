const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const db = require("./databaseConnection");

const blogRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const app = express(); 

app.use(express.json());
app.use(cors());
app.use(cookieParser());

//db models
const Blog = require("./models/blog");

//routes
app.use("/blog", blogRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening on port: " + port);

  db.loadDb();

  // retreives all blogs.
  app.get("/", (req, res) => {
    Blog.find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get("/", (req, res) => {
    console.log(JSON.stringify(req.body.cat));
    Blog.find({category:req.query.cat})
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
        });
  });


    // app.get("/add", (req, res) => {
    //   const blog = new Blog({
       
    //     title: "Design blog",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit",
    //     img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600",
    //     category: "design",
    //     creator:"1234",
    //   });
    
    //   blog
    //     .save()
    //     .then((result) => {
    //       res.json(result);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // });

});
