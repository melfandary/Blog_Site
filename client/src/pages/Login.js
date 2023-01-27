import { React, useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/authContext";

// import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    setError("");
  };




  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  console.log(inputs);

  return (
    <div className="auth">
      <h1>Login</h1>
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
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err} </p>}
        <span>
          New here?
          <Link to="/register" className="link">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
