import React from "react"
import {useState} from 'react'
import Navbar from "../components/Navbar"
import "./Signin.css"

function SignIn() {
    return(
      <>
        <div><h1>Get Started Now</h1>
        <form>
         <input type="text"></input>
         <input type="text"></input>
         <input type="text"></input>
        
         <button>Signup</button>
        </form>
         <button>Sign in in with Google</button>

         <p>Already have an account? <Link to="">Sign in</Link></p>
        </div>

      </>
    );
}

export default SignIn;