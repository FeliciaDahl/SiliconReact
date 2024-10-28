import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);           //or:    setIsDropdownOpen(!isDropdownOpen); ??
    };

    return (
        <nav className='drop-navigation'>
            <button className="btn-nav" onClick={toggleDropdown}>
                <img className="show-light" src="./images/header/nav-btn.svg" alt="button navigation" />
                <img className="show-dark" src="./images/header/nav-btn-dark.svg" alt="button navigation" />
            </button>

            {isDropdownOpen && (
                <div className="dropdown-menu">
                    <NavLink className="drop-link" to="/">Home</NavLink>
                    <NavLink className="drop-link" to="/feature">Features</NavLink>
                    <NavLink className="drop-link" to="/contact">Contact</NavLink>
                    <NavLink className="drop-link" to="/signin">Sign In</NavLink>
                </div>
            )}
        </nav>
    );
};

export default NavBar;