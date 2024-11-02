import React from 'react'
import { NavLink } from 'react-router-dom'
import ContactUs from '../components/ContactUs'
import ConsultationForm from '../components/ConsultationForm'

const Contact = () => {
  return (
    <>
      <div className="bg-container">

        <div className='container'>

          <nav className='contact-nav flex-1 pb-2 pt-2'>

            <i className="fa-regular fa-house"></i>
            <NavLink className="contact-links-top" to="/">Homepage</NavLink>
            <i className="fa-regular fa-angles-right"></i>
            <NavLink className="contact-links-top" to="/contact">Contact</NavLink>
          </nav>

          <div className="view-contact pt-1 ">
            <div className="desktop">
              <h1 className='contact-header pb-2'>Contact Us</h1>
              <ContactUs />
            </div>
            <div className="consultation-card">
              <h2 className='h2-32 '>Get Online Consultation</h2>
              <ConsultationForm />

            </div>
          </div>
        </div>
      </div>

      <div className="location pt-2 pb-2">

        <img className="map pb-1" src="../images/view-contact/map.svg" alt="map" />
        <div className="adress-cards">
          <div className="adress-card pb-2">
            <h3 className='.h3-24 pb-1'>Medical Center 1</h3>
            <div className="information-list">
            <div className="info-items"><i className="fa-light fa-location-dot"></i><p>4517 Washington Ave. Manchester, Kentucky 39495</p></div>
            <div className="info-items"><i className="fa-regular fa-phone-volume"></i><p>(406) 555-0120</p></div>
            <div className="info-items"><i className="fa-regular fa-clock"></i><p>Mon – Fri: 9:00 am – 22:00 am
                Sat – Sun: 9:00 am – 20:00 am</p></div>
            </div>
          </div>
          <div className="adress-card">
            <h3 className='.h3-24 pb-1'>Medical Center 2</h3>
            <div className="information-list ">
              <div className="info-items"><i className="fa-light fa-location-dot"></i><p>2464 Royal Ln. Mesa,New Jersey 45463</p></div>
              <div className="info-items"><i className="fa-regular fa-phone-volume"></i><p>(406) 544-0123</p></div>
              <div className="info-items"><i className="fa-regular fa-clock"></i><p>Mon – Fri: 9:00 am – 22:00 am
                Sat – Sun: 9:00 am – 20:00 am</p></div>
            </div>
            </div>
            <div className="social pt-2">
              <div className="social-box">
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-facebook"></i></a>
              </div>
              <div className="social-box">
                <a href="http://www.x.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-x-twitter"></i></a>
              </div>
              <div className="social-box">
                <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-instagram"></i></a>
              </div>
              <div className="social-box">
                <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-youtube"></i></a>
              </div>
           
          </div>

        </div>
      </div>

    </>


  )
}

export default Contact