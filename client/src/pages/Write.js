import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";



const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="writeBlog">
      <div className="content">
        <input placeholder="title" />
        <div className="editorContainer">
          <ReactQuill
            placeholder="Insert thoughts here..."
            className="quill"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h2>Post</h2>
          <label htmlFor="file">Upload Image</label>
          <input className="file" type="file" id="file" name=""></input>
        </div>
        <div className="item">
          <h2>Category</h2>
          <div className="category">
            <input type="radio" name="cat" value="food" id="food" />
            <label htmlFor="food">food</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="design" id="design" />
            <label htmlFor="design">Design</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
