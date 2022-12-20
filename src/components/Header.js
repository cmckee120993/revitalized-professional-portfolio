import React, {useState} from 'react';
import Navigation from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import '../styles/Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileCode} from '@fortawesome/free-solid-svg-icons';
import {faKeyboard} from '@fortawesome/free-solid-svg-icons'
import {faGlobe} from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
            default: 
                return <About />;
        }
    };

    return (
    <div>
        <header className="header">
            <h1>Clayton McKee</h1>
        </header>
        <div className="icons">
            <FontAwesomeIcon className="icon" icon={faFileCode}/>
            <FontAwesomeIcon className="icon" icon={faKeyboard}/>
            <FontAwesomeIcon className="icon" icon={faGlobe}/>
        </div>
        
        <Navigation currentPage={currentPage}
        handlePageChange={handlePageChange} />
        <main>
            <div>{renderPage(currentPage)}</div>
        </main>
    </div>
    );
};

export default Header;