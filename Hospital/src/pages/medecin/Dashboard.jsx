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
        <div className="page-contain">
            <div className="title-wrapper">
               <p className="left-title">LIFE | </p>
               <p className="left-title care">CARE</p>
            </div>
            <div className="side-panel">
               <img src={dash} className="panel-logos"/>
               <p className="panel-text">Dashboard</p>
               <img src={doctor} className="panel-logos"/>
               <p className="panel-text">Doctor</p>
               <img src={patient} className="panel-logos"/>
               <p className="panel-text">Patients</p>
               <img src={appoint} className="panel-logos"/>
               <p className="panel-text">Appointment</p>
               <img src={payment} className="panel-logos"/>
               <p className="panel-text">Payment</p>
               <img src={setting} className="panel-logos"/>
               <p className="panel-text">Setting</p>

               <img src={logout} className="panel-logos"/>
               <p className="panel-text logout">Log out</p>
               <img src={trash} className="panel-logos"/>
               <p className="panel-text">Delete Profile</p> 
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