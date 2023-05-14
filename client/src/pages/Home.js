import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState("");

  const category = useLocation().search;

  useEffect(() => {
    const getBlogs = async () => {
      try {
        await axios.get(`http://localhost:5000/${category}`)
        .then((res) => {
          setBlogs(res.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getBlogs();
  }, [category]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      {blogs ? (
        <div className="blogs">
          {blogs.map((blog) => (
            <div className="blog" key={blog._id}>
              <div className="img">
                <img src={blog.img} alt="" />
              </div>
              {/* `../upload/${blog.img}` */}
              <div className="content">
                <h1>{blog.title}</h1>
                <p> {getText(blog.desc)}</p>

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
