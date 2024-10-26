import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <>
  
    <header aria-label="main-navigation">
   
    <div className="container">

        <Link className='logo' to="/">
            <img className="show-light" src="./images/header/logo-header.svg" alt="Silicon bank logo" />
            <img className="show-dark" src="./images/header/logo-header-dark.svg" alt="Silicon bank logo" />
        </Link>
        

        <nav id="nav-f">
            <NavLink className="nav-link" to="/feature">Features</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </nav>

        <div className="btn-toggle">
            <span id="dark-mode" className="label">Dark mode</span>
   
         <label className="switch" aria-labelledby="darkmode switch">
            <input type="checkbox" id="darkmode-switch" />
                <span className="slider"></span>
        </label>
        </div>

        <div id="sign-in">
            <NavLink className= "btn btn-sign-in" to="/signin"><img src="./images/header/icon-signin.svg" alt="Sign-in button" />
             <span className="f-size-14">Sign in / up</span>
            </NavLink>
        </div>

        <nav>
        <button className="btn-nav">
            <img className="show-light" src="./images/header/nav-btn.svg" alt="button navigation" />
            <img className="show-dark" src="./images/header/nav-btn-dark.svg" alt="button navigation" />
        </button>
    </nav>
</div>


</header>
   </>
  )
}

export default Header
