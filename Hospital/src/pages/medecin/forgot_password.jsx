import { Link } from "react-router-dom";
import "./Signup.css";
import "./forgot_password.css";
import googleLogo from '../../assets/google.png';
import appleLogo from '../../assets/apple.png';
import heart from '../../assets/heart.png';
//import finger from '../../assets/finger.png'


function ForgotPassword() {
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
          <h1>Forgot Password?</h1>
          <p className="first-p">Enter your email address and we'll send you a reset pin</p>
        <form >
         <p className="input_names">Email Address</p>
         <input type="text" placeholder="Enter your email address"></input>
         
        </form>
         <button className="reset_button">send reset pin</button>
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
         <div className="dots">
         <p style={{fontSize:64, color:"#0F3DDE"}}>.</p>
         <p style={{fontSize:64}}>.</p>
         <p style={{fontSize:64}}>.</p>
         </div>

        </div>
       </div>
      </div>
    );
}

export default ForgotPassword;