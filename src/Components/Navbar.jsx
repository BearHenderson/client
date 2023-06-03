import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container justify-content-center">
            <div className='playfair-font'>
        <Link className="nav-link" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/submissions">Submission Info</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/issues">I want Issues!</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            </ul>
        </div>
        </div>
        </div>
    </nav>
    );
};

export default Navbar;
