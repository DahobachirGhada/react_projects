import {Link} from "react-router-dom"
import "./Dashboard.css";
import dash from "../../assets/Dashboard-icons/grid-outline.png";
import doctor from "../../assets/Dashboard-icons/person-outline.png";
import patient from "../../assets/Dashboard-icons/patient.png";
import appoint from "../../assets/Dashboard-icons/calendar-outline.png";
import payment from "../../assets/Dashboard-icons/payment.png";
import setting from "../../assets/Dashboard-icons/settings-outline.png";
import logout from "../../assets/Dashboard-icons/power-outline.png";
import trash from "../../assets/Dashboard-icons/trash-2-outline.png";


function DashBoard(){
    return(
        <div className="page-container">
            <div className="title-wrapper">
               <p className="left-title">LIFE | </p>
               <p className="left-title care">CARE</p>
            </div>
            <div className="side-panel">
               <img src={dash}/>
               <p>Dashboard</p>
               <img src={doctor}/>
               <p>Doctor</p>
               <img src={patient}/>
               <p>Patients</p>
               <img src={appoint}/>
               <p>Appointment</p>
               <img src={payment}/>
               <p>Payment</p>
               <img src={setting}/>
               <p>Setting</p>

               <img src={logout}/>
               <p>Log out</p>
               <img src={trash}/>
               <p>Delete Profile</p> 
            </div>

            <div className="search-bar">
                <input type="text" placeholder="search"></input>
            </div>

            <div className="toal-data">
                <div>
                    <p>Total Invoice</p>
                </div>
                <div>
                    <p>Total Patients</p>
                </div>
                <div>
                    <p>Appointment</p>
                </div>
                <div>
                    <p>Rooms</p>
                </div>
            </div>
        </div>

    );
}

export default DashBoard;