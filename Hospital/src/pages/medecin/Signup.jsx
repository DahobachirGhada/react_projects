import React from "react"
import {useState} from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar"
import "./Signup.css"
import googleLogo from '../../assets/google.png';

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
            Sign in in with Google</button>
         <button className="apple">Sign in with Apple</button>
         </div>
         

         <p>Already have an account? <Link to="/SignIn">Sign in</Link></p>
        </div>

      </>
    );
}

export default SignUp;