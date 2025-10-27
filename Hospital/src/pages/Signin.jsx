import React from "react"
import {useState} from 'react'
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
import "./Signin.css";
import googleLogo from '../assets/google.png';
import appleLogo from '../assets/apple.png';
import heart from '../assets/heart.png';

function SignIn() {
    return(
       <div className="page-container">
              {/*LEFT SIDE */}
              <div className="left-side">
      
                <div className="title-wrapper">
                <p className="left-title">LIFE | </p>
                <p className="left-title care">CARE</p>
                </div>
                <img src={heart} className="heart-image"/>
              </div>
      
      
              {/*RIGHT SIDE*/}
             <div className="right-side">
              <div className="signup_info">
                <h1>Welcome back!</h1>
                <p className="first-p">Enter your credentials to access your account</p>
              <form >
               <p className="input_names">Email Address</p>
               <input type="text" placeholder="Enter your email address"></input>

               <div className="password-box">
                <p className="input_names">Password</p>
                <p ><Link to="/ForgotPassword" className="forgot-password">forgot password</Link></p>
               </div>
               <input type="text" placeholder="Enter your password"></input>
               
              </form>
               <button className="signup_button">Login</button>
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
               
      
               <p className="or already">Don't have an account? <Link to="/SignUp" className="link">Sign Up</Link></p>
              </div>
             </div>
            </div>
    );
}

export default SignIn;