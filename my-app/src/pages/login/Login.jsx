import './login.css'
import React, { useContext } from "react"
import {useRef} from 'react'
import { logincall } from '../../apiCalls';
import {AuthContext} from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user,isFetching , error, dispatch}=useContext(AuthContext);
  const handleClick = (e) =>{
    e.preventDefault();
    logincall({email:email.current.value,password:password.current.value},dispatch)
  }

  console.log(user);
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>
            Tanishk's Social
          </h3>
          <span className="loginDesc">Connect with friends and the world around you on Tanishk's Social.</span>
        </div>
        <div className="loginRight">
          <form className='loginBox' onSubmit={handleClick}>
            <input placeholder="Email" className="loginInput" type="email" required ref={email}/>
            <input placeholder="Password" className="loginInput" type="password" required minLength="6" ref={password} />
            <button className="loginButton" type="submit" disabled ={isFetching}>{isFetching ? <CircularProgress color='white' size="25px" /> : "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">{isFetching ? <CircularProgress color='white' size="25px" /> 
            : "Create a new account"
            }</button>
            </form>
        </div>
      </div>
    </div>
  )
}
