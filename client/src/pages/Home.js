import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "laboriosam harum quod, dolores odit qui ea nostrum aspernatur",
      img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title:
        "aperiam dicta accusamus l ullam veniam nihil sapiente odio!",
      desc: "laboriosam harum quod, dolores odit qui ea nostrum aspernatur",
      img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  
  return (
    <div className="home">
      <div className="blogs">
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <div className="img">
              <img src={blog.img} alt="" />
            </div>
            <div className="content">
            
                <h1>{blog.title}</h1>
             

              <p> {blog.desc}</p>
              <Link className="link" to={`/blog/${blog.id}`}>
              <button>Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
