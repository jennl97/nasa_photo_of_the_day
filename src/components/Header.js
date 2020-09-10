import React from "react";
import nasaLogo from '../images/NASA_logo.png'

function Header (){
    return(
        <div id="header">
            <div>
            <img className="mainLogo" src={nasaLogo} alt="NASA logo" />
            </div>
            
            <div>
            <h1 className="header_h1">NASA Astronomy Picture of the Day!</h1>
            </div>
            
        </div>
        
    )
};

export default Header;