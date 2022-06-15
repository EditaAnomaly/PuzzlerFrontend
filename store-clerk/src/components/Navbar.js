import React from 'react'
import logoblue from './../images/logoblue.png'
import help from './../images/help.png'
import logout from './../images/logout.png'
import { useMsal } from "@azure/msal-react";

const Navbar = () => {
    const { instance, accounts } = useMsal();
    const handleLogout = () => {
        instance.logoutRedirect().catch(
          console.error
        );
    }
    return ( 
        <nav className="navbar navbar-nav navbar-right">
            <div className="links">
                <a href="/help"><img src={help} className="App-icon me-5" alt="icon"/></a>
                <a href="/"><img src={logoblue} className="App-logo me-5" alt="logo"/></a>
                {/* <a href="/"><img src={logout} className="App-icon me-5" alt="icon"/></a> */}
                <button className='logout' onClick={handleLogout}></button>
            </div>
        </nav>
     )
}

export default Navbar;