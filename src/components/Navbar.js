import React from 'react';
import '../styles/Navbar.css';

function Navigation(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume', 'Rates']
    return (
        <navbar className="topnav">
            {tabs.map((tab) => (
            <button key={tab}>
                <a href={'#' + tab.toLowerCase()} onClick={() => props.handlePageChange(tab)} >
                    <h2>{tab}</h2>
                </a>
            </button>
            ))}
        </navbar>
    );
};

export default Navigation;