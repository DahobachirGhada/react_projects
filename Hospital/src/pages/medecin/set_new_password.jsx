import {Link} from "react-router-dom"
import "./set_new_password.css"
import password from "../../assets/password.png"
import heart from '../../assets/heart.png'

function SetNewPassword() {
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
                    
                   <img src={password} className="password-image"/>
                   <h1>Set a new password</h1>
                 <form className="form_info">
                  <p className="input_names">Password</p>
                  <input type="text" placeholder="Enter your password"></input>
                  <p className="input_names">Confirm password</p>
                  <input type="text" placeholder="Enter your password"></input>                  
                 </form>
                  <button className="signup_button">reset password</button>
                 </div>
                </div>
               </div>
    );
   
}

export default SetNewPassword;