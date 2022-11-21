import React from 'react';
import '../styles/Navbar.css';

function Navigation(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume']
    return (
        <navbar className="topnav">
            {tabs.map((tab) => (
            <button className={props.currentPage === tab ? 'nav-item is-active' : 'nav-item'} key={tab}>
                <a href={'#' + tab.toLowerCase()} onClick={() => props.handlePageChange(tab)} className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}>
                    <h2>{tab}</h2>
                </a>
            </button>
            ))}
        </navbar>
    );
};

export default Navigation;