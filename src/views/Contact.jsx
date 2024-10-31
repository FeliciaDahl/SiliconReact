import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <div className="bg-container">

   <div className='container'>
    <nav className='contact-nav flex-1 pt-2'>
    
    <i class="fa-regular fa-house"></i>
    <NavLink className="contact-links-top" to="/">Homepage</NavLink>
    <i class="fa-regular fa-angles-right"></i>
    <NavLink className="contact-links-top" to="/contact">Contact</NavLink>
    </nav>
<div className="view-contact pt-1 ">
  <h1 className='contact-header pb-2'>Contact Us</h1>

  <div className='contact-email flex-1 pt-1'>

      <div className="contact-icon">
        <i className='icon-color' class="fa-regular fa-envelope"></i>
      </div>
      <div className="icon-content pb-2">
        <h2 className='pb-1'>Email Us</h2>
        <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
        <a className="contact-link flex-1 pt-2" href="#">Leave a message<i className="fa-sharp fa-solid fa-arrow-right"></i></a>
      </div>
      </div>

  <div className='contact-email flex-1 pt-1'>

      <div className= "contact-icon">
        <i className='icon-color' class="fa-regular fa-users-medical"></i>
      </div>
      <div className="icon-content">
        <h2 className='pb-1'>Careers</h2>
        <p>We're always looking for new people to be a part of our growing team. Are you intrested?</p>
        <a className="contact-link flex-1 pt-2" href="#">Send an application<i className="fa-sharp fa-solid fa-arrow-right"></i></a>
      </div>
  </div>
</div>

   </div>
   </div>
   </>
  )
}

export default Contact