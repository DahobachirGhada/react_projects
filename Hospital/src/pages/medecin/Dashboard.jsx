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

                <div className="panel-item">
                 <img src={dash} className="panel-logos"/>
                 <p className="panel-text panel-text-blue">Dashboard</p>
                </div>
                <div className="panel-item">
                 <img src={doctor} className="panel-logos"/>
                 <p className="panel-text">Doctor</p>
                </div>
                <div className="panel-item">
                 <img src={patient} className="panel-logos"/>
                 <p className="panel-text">Patients</p>   
                </div>
                <div className="panel-item">
                 <img src={appoint} className="panel-logos"/>
                 <p className="panel-text">Appointment</p>   
                </div>
                <div className="panel-item">
                 <img src={payment} className="panel-logos"/>
                 <p className="panel-text">Payment</p>   
                </div>
                <div className="panel-item">
                 <img src={setting} className="panel-logos"/>
                 <p className="panel-text">Setting</p>
                </div>
                <div className="panel-item logout">
                 <img src={logout} className="panel-logos"/>
                 <p className="panel-text panel-text-red">Log out</p>   
                </div>
                <div className="panel-item">
                 <img src={trash} className="panel-logos"/>
                 <p className="panel-text panel-text-red">Delete Profile</p>  
                </div>
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