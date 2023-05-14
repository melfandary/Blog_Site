const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");

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
app.use("/", blogRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);



const storage = multer.diskStorage({
  destination:(req,res,callback)=>{
    callback(null,'../client/public/upload')
  },  
  filename: (req,res,callback)=>{
    callback(null,Date.now()+res.originalname)
  }
})

const upload = multer({storage});

app.post("/upload", upload.single('file'), (req, res) => {
  const file = req.file;
  return res.status(200)//.json(file.filename);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening on port: " + port);

  db.loadDb();

  // retreives all blogs.
  // app.get("/", (req, res) => {
  //   Blog.find()
  //     .then((result) => {
  //       res.json(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });



  // app.get("/", (req, res) => {
  //   console.log(JSON.stringify(req.body.cat));
  //   Blog.find({ category: req.query.cat })
  //     .then((result) => {
  //       res.json(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  // app.post("/add", (req, res) => {
  //   console.log(req.body.img);
  //   const blog = new Blog({

  //     title: req.body.title,
  //     desc: req.body.desc,
  //     img: req.body.img,
  //     category: req.body.cat,
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
