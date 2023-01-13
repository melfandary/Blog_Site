import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder=" enter username" />
        <input required type="password" placeholder="enter password" />
        <button>Login</button>
        <p>error</p>
        <span>
          New here? <Link to="/register" className="link">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
