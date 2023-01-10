import React from "react";

const Menu = () => {
  const blogs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "laboriosam harum quod, dolores odit qui ea nostrum aspernatur",
      img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "aperiam dicta accusamus l ullam veniam nihil sapiente odio!",
      desc: "laboriosam harum quod, dolores odit qui ea nostrum aspernatur",
      img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="menu">
      <h1>More posts</h1>
      {blogs.map(blog=>(
        <div className="blog" key={blog.id}>
            <img src={blog.img} alt=""/>
            <h2></h2>
            <button>More Blogs &rarr; </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
