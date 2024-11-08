import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev); 
    };

    const handleMenuClick = () => {
        setIsDropdownOpen(false)
    }
    return (
        <nav className='drop-navigation'>
            <button className="btn-nav" onClick={toggleDropdown}>
                <img className="show-light" src="./images/Header/nav-btn.svg" alt="button navigation" />
                <img className="show-dark" src="./images/Header/nav-btn-dark.svg" alt="button navigation" />
            </button>

            {isDropdownOpen && (
                <div className="dropdown-menu">
                    <NavLink className="drop-link" to="/"onClick={handleMenuClick}>Home</NavLink>
                    <NavLink className="drop-link" to="/feature"onClick={handleMenuClick}>Features</NavLink>
                    <NavLink className="drop-link" to="/contact"onClick={handleMenuClick}>Contact</NavLink>
                    <NavLink className="drop-link" to="/signin"onClick={handleMenuClick}>Sign In</NavLink>
                </div>
            )}
        </nav>
    );
};

export default NavBar;