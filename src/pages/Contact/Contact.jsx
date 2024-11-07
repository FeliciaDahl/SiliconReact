import React from 'react'
import { NavLink } from 'react-router-dom'
import ContactUs from './Components/ContactUs/ContactUs'
import ConsultationForm from './Components/ConsultationForm/ConsultationForm'
import Locations from './Components/FindUs/Locations'
import Social from './Components/FindUs/Social'

const Contact = () => {
  return (
    <>
     
      <div className="bg-container">

    
          <nav className='contact-nav flex-1 pb-2 pt-2'>

            <i className="fa-regular fa-house"></i>
            <NavLink className="contact-link-top" to="/">Homepage</NavLink>
            <i className="fa-regular fa-angles-right"></i>
            <NavLink className="contact-link-top" to="/contact">Contact</NavLink>
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
     

      <div className="location pt-2 pb-2">

        <Locations />
      </div>
      <Social /> 
      
    </>


  )
}

export default Contact