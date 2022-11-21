import React, {useState} from 'react';
import Navigation from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import '../styles/Header.css';

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
                return <About />
        }
    };

    return (
    <div>
        <header className="header">
            <h1>Clayton McKee</h1>
        </header>
        <Navigation currentPage={currentPage}
        handlePageChange={handlePageChange} />
        <main>
            <div>{renderPage(currentPage)}</div>
        </main>
    </div>
    );
};

export default Header;