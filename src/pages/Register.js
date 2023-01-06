import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="email" placeholder=" enter your e-mail" />
        <input required type="text" placeholder=" enter username" />
        <input required type="password" placeholder="enter password" />
        <button>Register</button>
        <p>error</p>
        <span>
          Already registerd? <Link to="/login" className="link">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
