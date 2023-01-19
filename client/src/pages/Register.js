import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async  (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("/auth/register", inputs);
      console.log("from try" +res);
    } catch (err) {
      console.log(" from catch"+err);
    }

  };


  console.log(inputs);

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder=" enter username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="enter password"
          name="password"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder=" enter your e-mail"
          name="email"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        <p>error</p>
        <span>
          Already registerd?{" "}
          <Link to="/login" className="link">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
