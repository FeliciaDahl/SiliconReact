import React from 'react'

const Header = () => {
  return (
   <>
  
    <header aria-label="main-navigation">

    <div className="container">

        <a href="index.html">
            <img className="show-light" src="./images/header/logo-header.svg" alt="Silicon bank logo" />
            <img className="show-dark" src="./images/header/logo-header-dark.svg" alt="Silicon bank logo" />
        </a>
        

        <nav id="nav-f">
            <a className="nav-features" href="features.html">Features</a>
        </nav>

        <div className="btn-toggle">
            <span id="dark-mode" className="label">Dark mode</span>
   
         <label className="switch" aria-labelledby="darkmode switch">
            <input type="checkbox" id="darkmode-switch" />
                <span className="slider"></span>
        </label>
        </div>

        <div id="sign-in">
            <a className= "btn btn-sign-in" href="sign-in.html"><img src="./images/header/icon-signin.svg" alt="Sign-in button" />
             <span className="f-size-14">Sign in / up</span>
            </a>
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
