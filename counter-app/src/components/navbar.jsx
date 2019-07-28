import React, { Component } from 'react';

// Stateless Functional Compenent

const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar {" "} <span class="badge badge-pill badge-info">{props.totalCounters}</span>
            </a>
        </nav>
    );
}

export default NavBar;