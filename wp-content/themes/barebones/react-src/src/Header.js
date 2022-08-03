import React from "react";
import "./App.css";
import logo from "./logo.png"

function Header() {
    return <div className="Header">
                <div className="Header-text-box">
                    <p className="Header-text">МАСШТАБНЫЕ КОПИИ И <br/>МАКЕТЫ ТЕХНИКИ,СУДОВ, СОРУЖЕНИЙ<br/>
<b className="Tel">+375 29 685-25-15</b></p>               
                </div>
                <div className="Header-logo">
                    <img src = {logo} alt = "logo image"/>  
                    <b className="Logo_text">ТЕХНОМАКЕТ</b>  
                </div> 
            </div>
}

export default Header;