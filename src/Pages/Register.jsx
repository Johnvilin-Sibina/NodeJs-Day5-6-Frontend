import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState('')

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { userName, email, password, role };
    await axios
      .post("http://localhost:5000/api/user/register-user", payload)
      .then((res) =>{
        toast.success(res.data.message)
        navigate('/login')
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message)
      });
      setEmail('')
      setPassword('')
      setUserName('')
      setRole('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <strong>User Registration</strong>
          </legend>
          <p>
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter Your Name"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Mail Id"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="role">Role:</label>
            <input
              type="text"
              name="role"
              id="role"
              placeholder="Enter Your Role"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </p>
          <button type="submit">Register</button>
        </fieldset>
      </form>
          <br/>
          <button><Link to='/login'>Login</Link></button>
          <br/><br/>
          <button><Link to='/'>Back</Link></button>
    </div>
  );
};

export default Register;
