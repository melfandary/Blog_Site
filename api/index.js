const express = require("express");
const app = express(); 

app.use(express.json());
const cors = require("cors");

//db models
const Blog = require("./models/blog");
const User = require("./models/user");
const db = require("./databaseConnection");



//routes
const blogRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

app.use("/blog", blogRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

const port = process.env.PORT || 5000;

//allow  cross origin resource share
app.use(cors());

//  app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });

app.listen(port, () => {
  console.log("listening on port: " + port);

  db.loadDb();

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

  //adds a new blog and saves it to the database.

  // app.get("/addblog", (req, res) => {
  //   const blog = new Blog({
  //     title: "Blog five",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit",
  //     img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   });

  //   blog
  //     .save()
  //     .then((result) => {
  //       res.send(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });


});
