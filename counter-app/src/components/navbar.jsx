import React, { Component } from 'react';

// Stateless Functional Compenent

const NavBar = ({totalCounters}) => {
    console.log('Navbar - Rendered');
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar {" "} <span className="badge badge-pill badge-info">{totalCounters}</span>
            </a>
        </nav>
    );
}

export default NavBar;