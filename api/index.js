const express = require("express");
const app = express(express.json); // for the database?

const Blog = require('./models/blog')

const db = require("./databaseConnection");

app.listen(5000, () => {
  console.log("listening..");

  db.loadDb();


app.get("/add-blog",(req,res)=>{
 const blog = new Blog({
  id:1,
   title:"blog one",  
   desc:"blog one descreptions",
   img:"thats for later"
 })
})

















});
