import React from 'react';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.webp';
import logo from '../assets/images/clays-creative-solutions.png'
import '../styles/Footer.css';

function Footer() {
return (
<footer className="footer">
    <div className="links">
            <a href="https://github.com/cmckee120993"><img alt="Link to Github" src={github} /></a>
            <a href="https://www.linkedin.com/in/clayton-mckee-ba992a123/"><img alt="Link to LinkedIn" src={linkedin} /></a>
        </div>
        <div className="logo-div">
            <img className="logo" alt="Clay's Creative Solutions Logo" src={logo} />
        </div>
        <div className="header-div">
            <h3>© Clay's Creative Solutions</h3>
        </div>
</footer>
);
};

export default Footer;