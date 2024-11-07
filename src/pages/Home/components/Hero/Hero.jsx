import React from 'react'

const Hero = () => {
  return (
  
<section aria-label="hero" className="hero">

<div className="container">

<div className="hero-h1 pt-2">
<h1>Mange All Your Money in One App</h1> 
    </div>

<div className="hero-content">

    <p className="p-hero bd-text pt-1 pb-1 f-size-18">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
    
    <div className="app-btn grid-1 pt-2">
        <a className="app-store" href="#" target="_blank">
            <img className="show-light" src="./images/hero/appstore-light.svg" alt="Link Applestore" />
            <img className="show-dark" src="./images/hero/appstore-dark.svg" alt="Link Applestore" />
        </a>
        <a className="app-store" href="#" target="_blank">
            <img className="img show-light" src="./images/hero/googleplay-light.svg" alt="Link googleplay" />
            <img className="show-dark" src="./images/hero/googleplay-dark.svg" alt="Link googleplay" />
        </a>
    </div>

<div className="btn-discover flex-1 pt-2">
    <button className="btn-circle">
        <i className="fa-solid fa-chevron-down"></i>
    </button>  
    <p className="bd-text">Discover more</p>
</div>
</div>

    <div className="img-hero">
        <img className="img-front" src="./images/hero/hero-phone-front.svg" alt= "Iphone showing Silicon app" />
    <img className="img-back" src="./images/hero/hero-phone-back.svg" alt="Iphone in background" />
</div>
</div>


</section>

  )
}

export default Hero