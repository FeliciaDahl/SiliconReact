import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ContactUs from '../components/ContactUs'
import ConsultationForm from '../components/ConsultationForm'
import Locations from '../components/Locations'

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

<Locations/>
    </div>
            <div className="social pt-2">
              <div className="social-box">
                <Link to="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-facebook"></i></Link>
              </div>
              <div className="social-box">
                <Link to="http://www.x.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-x-twitter"></i></Link>
              </div>
              <div className="social-box">
                <Link to="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-instagram"></i></Link>
              </div>
              <div className="social-box">
                <Link to="http://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-youtube"></i></Link>
              </div>
          </div>

     
      

    </>


  )
}

export default Contact