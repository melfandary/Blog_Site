const mongoose = require("mongoose");

const schema = mongoose.Schema;

const blogSchema = new schema(
  {
    title: {
      type: String, //add categorey and creator values
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
blogSchema.path("_id");
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
