import React from "react";
import { Link } from "react-router-dom";
import PinInput from "./pin_input";
import "./Signup.css";
import "./forgot_password.css";
import "./password_reset.css";
import googleLogo from '../../assets/google.png';
import appleLogo from '../../assets/apple.png';
import heart from '../../assets/heart.png';
//import finger from '../../assets/finger.png'





function PasswordReset() {

  const handlePinComplete = (pin) => {
    console.log("entered PIN:", pin);
  }
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
        <div className="forgot_password_info">
          <h1>Password Reset</h1>
          <p className="first-p">We sent a reset pin</p>
          {/* add a variable with the email  */}
          <PinInput onComplete={handlePinComplete}/>
         

         <p className="or already">Already have an account? <Link to="/SignIn" className="link">Sign in</Link></p>
         <div className="dots">
         <p style={{fontSize:64}}>.</p>
         <p style={{fontSize:64, color:"#0F3DDE"}}>.</p>
         <p style={{fontSize:64}}>.</p>
         </div>

        </div>
       </div>
      </div>
    );
}

export default PasswordReset;