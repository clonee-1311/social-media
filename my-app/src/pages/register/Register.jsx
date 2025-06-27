import './register.css';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
      passwordAgain.current.reportValidity();
    } else {
      passwordAgain.current.setCustomValidity(""); // Clear previous error
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Tanishk's Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Tanishk's Social.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" required ref={email} type="email" className="loginInput" />
            <input placeholder="Password" required ref={password} type="password" minLength="6" className="loginInput" />
            <input placeholder="Password Again" required ref={passwordAgain} type="password" minLength="6" className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton" type="button" onClick={() => navigate("/login")}>
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
