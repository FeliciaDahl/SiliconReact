import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className='drop-navigation'>
            <button className="btn-nav" onClick={toggleDropdown}>
                <img className="show-light" src="./images/header/nav-btn.svg" alt="button navigation" />
                <img className="show-dark" src="./images/header/nav-btn-dark.svg" alt="button navigation" />
            </button>

            {isDropdownOpen && (
                <div className="dropdown-menu">
                    <NavLink className="drop-link" to="/"><p>Home</p></NavLink>
                    <NavLink className="drop-link" to="/feature"><p>Features</p></NavLink>
                    <NavLink className="drop-link" to="/contact"><p>Contact</p></NavLink>
                    <NavLink className="drop-link" to="/signin"><p>Sign In</p></NavLink>
                </div>
            )}
        </nav>
    );
};

export default NavBar;