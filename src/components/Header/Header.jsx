import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import DarkModeSwitch from './DarkModeSwitch'
import NavBar from './NavBar'

const Header = () => {
  return (
   <>
 
    <header aria-label="main-navigation">
    <div className='head-bg-t'>
    <div className="container">

        <Link className='logo' to="/">
            <img className="show-light" src="./images/Header/logo-header.svg" alt="Silicon bank logo" />
            <img className="show-dark" src="./images/Header/logo-header-dark.svg" alt="Silicon bank logo" />
        </Link>
        
        <nav id="nav-f">
            <NavLink className="nav-link" to="/feature">Features</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </nav>
       

        <div className="btn-toggle">
            <span id="dark-mode" className="label">Dark mode</span>
        <DarkModeSwitch/>
        </div>

        <div id="sign-in">
            <NavLink className= "btn btn-sign-in" to="/signin"><img src="./images/Header/icon-signin.svg" alt="Sign-in button" />
             <span className="f-size-14">Sign in / up</span>
            </NavLink>
        </div>

        <NavBar/>
        </div>
</div>


</header>
   </>
  )
}

export default Header
