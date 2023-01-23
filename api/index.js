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
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
