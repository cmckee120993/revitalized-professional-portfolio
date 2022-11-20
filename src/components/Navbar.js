import React from 'react';
import '../styles/Navbar.css'

function Navbar() {
    return (
        <navbar className="topnav">
            <button className="nav-button"><h2>About Me</h2></button>
            <button className="nav-button"><h2>Portfolio</h2></button>
            <button className="nav-button"><h2>Contact</h2></button>
            <button className="nav-button"><h2>Résumé</h2></button>
        </navbar>
    );
};

export default Navbar;