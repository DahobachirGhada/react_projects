import React from "react"
import {useState} from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar"
import "./Signup.css"
import googleLogo from '../../assets/google.png';
import appleLogo from '../../assets/apple.png';

function SignUp() {
    return(
      <>
        <div className="signup_info">
          <h1>Get Started Now</h1>
        <form >
         <p className="input_names">Name</p>
         <input type="text" placeholder="Enter your name"></input>
         <p className="input_names">Email Address</p>
         <input type="text" placeholder="Enter your email address"></input>
         <p className="input_names">Password</p>
         <input type="text" placeholder="Enter your password"></input>
         
        </form>
         <button className="signup_button">Signup</button>
         <p className="or">or</p>
         <div className="other-options">
          <button className="google">
            <img src={googleLogo} className="google-icon"/>
            <span>Sign in in with Google</span>
          </button>
         <button className="apple">
          <img src={appleLogo} className="apple-logo"/>
          <span>Sign in with Apple</span>
          </button>
         </div>
         

         <p className="or already">Already have an account? <Link to="/SignIn" className="link">Sign in</Link></p>
        </div>

      </>
    );
}

export default SignUp;