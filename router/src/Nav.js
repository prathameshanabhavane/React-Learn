import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Link to="/home">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                        </Link>
                        <Link to="/about">
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </Link>
                        <Link to="/shop">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Nav;