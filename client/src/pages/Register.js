import { React,useState }  from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();
  const handleChange = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
        navigate('/login');
    } catch (err) {
      setError(err.response.data);
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
        {err && <p>{err}</p> }
        <span>
          Already registerd?  
          <Link to="/login" className="link">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
