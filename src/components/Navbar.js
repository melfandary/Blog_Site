import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/Blogger-logos.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=food">
            <h5>Food</h5>
          </Link>
          <Link className="link" to="/?cat=art">
            <h5>Art</h5>
          </Link>
          <Link className="link" to="/?cat=science">
            <h5>Science</h5>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h5>Technology</h5>
          </Link>
          <Link className="link" to="/?cat=design">
            <h5>Design</h5>
          </Link>
          <span>Username</span>
          <span>Logout</span>
          <span className="write">
            <Link to="/write" className="link">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
