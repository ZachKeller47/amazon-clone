import React from 'react'
import './login.css'
import { Link } from "react-router-dom";

function Login() {

  return (
    <div className="login">
        <Link to="/">
            <img 
                className="login__logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                alt="logo"
            />
        </Link>

        <div className="login__container">
        <h1>Sign In</h1>
        <form>
            <h5>E-mail</h5>
            <input type="email" />
            <h5>Password</h5>
            <input type="password" />
            <button type="submit" className="login__signInButton">Sign In</button>
        </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className="login__registerButton">Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login