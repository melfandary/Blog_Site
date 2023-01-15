import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Home = () => {

  const [blogs, setBlogs] = useState("");

  useEffect(() => {
    const getBlogs = () => {
      axios
        .get("http://localhost:5000/")
        .then((res) => {
          console.log(res.data);
          setBlogs(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getBlogs();
  }, []);

  return (
    <div className="home">
      {blogs ? (
        <div className="blogs">
          {blogs.map((blog) => (
            <div className="blog" key={blog._id}>
              <div className="img">
                <img src={blog.img} alt="" />
              </div>
              <div className="content">
                <h1>{blog.title}</h1>
                <p> {blog.desc}</p>
              
                <Link className="link" to={`/blog/${blog._id}`}>
                  <button>Read more</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Home;
