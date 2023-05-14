import React, { useState,useContext } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import axios from "axios";
import { useLocation,useNavigate } from "react-router-dom";

import { AuthContext } from "../Context/authContext";
const Write = () => {
  const state = useLocation().state;

  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.category || "");


  const  {currentUser} = useContext(AuthContext);
  const username = currentUser.username;
  


  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl =  upload();//await 

    try {
      state
        ? await axios.put(`/blog/${state.id}`, {
            title,
            desc,
            cat,
            img: file ? imgUrl : "",
            creator: username,  //better ways to do this?
          })
        : await axios.post("/blog/add", { //`/blog/`
            title,
            desc,
            cat,
            img: file ? imgUrl : "",
            creator: username, //better ways to do this?
          });
         
          navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="writeBlog">
      <div className="content">
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            placeholder="Insert thoughts here..."
            className="quill"
            theme="snow"
            value={desc}
            onChange={setDesc}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h2>Post</h2>
          <label htmlFor="file">Upload Image</label>
          <input
            className="file"
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          ></input>

          <div className="buttons">
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>

        <div className="item">
          <h2>Category</h2>
          <div className="category">
            <input
              type="radio"
              checked={cat === "food"}
              name="cat"
              value="food"
              id="food"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">food</label>
          </div>
          <div className="category">
            <input
              type="radio"
              checked={cat === "art"}
              name="cat"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="category">
            <input
              type="radio"
              checked={cat === "science"}
              name="cat"
              value="science"
              id="science"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="category">
            <input
              type="radio"
              checked={cat === "technology"}
              name="cat"
              value="technology"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="category">
            <input
              type="radio"
              checked={cat === "design"}
              name="cat"
              value="design"
              id="design"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
