import React from 'react';
import logoblue from './../images/logoblue.png';
import logout from './../images/logout.png';
import help from './../images/help.png'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-nav navbar-right">
            <div className="links">
                <a href="/help"><img src={help} className="App-icon me-5" alt="icon"/></a>
                <a href="/"><img src={logoblue} className="App-logo me-5" alt="logo"/></a>
                <a href="/logout"><img src={logout} className="App-icon me-5" alt="icon"/></a>
            </div>
        </nav>
     );
}
 
export default Navbar;