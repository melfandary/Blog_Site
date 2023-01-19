import React from "react";
import { useState, useEffect } from "react";

import editIcon from "../images/edit.png";
import deleteIcon from "../images/delete.png";
import { Link, useParams } from "react-router-dom";
import Menu from "./../components/Menu";

import axios from "axios";

const Singleblog = () => {
  const [blog, setBlog] = useState("");

  let { id } = useParams();

  console.log(`ID:`, id);
  useEffect(() => {
    const getBlog = () => {
      axios
        .get(`/blog/${id}`)
        .then((res) => {
          console.log(res.data);
          setBlog(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getBlog();
  }, []);

  return (
    <div className="singleblog">
      {blog ? (
        <div className="content">
          <img
            src={blog.img}
            alt="blog image"
          />
          <div className="user">
            <img
              src="https://images.pexels.com/photos/5474032/pexels-photo-5474032.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="user photo"
            />
            <div className="userInfo">
              <span> Username</span>
              <p>posted x days ago.</p>
            </div>

            <div className="modify">
              <Link to={`/write?edit=2`}>
                <img src={editIcon} alt="edit icon" />
              </Link>
              <img src={deleteIcon} alt="delete icon" />
            </div>
          </div>
          <h1>{blog.title}</h1>
          <p>{blog.desc}</p>
        </div>
      ) : null}
      <Menu />
    </div>
  );
};

export default Singleblog;