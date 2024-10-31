import React from 'react'
import { NavLink } from 'react-router-dom'
import ContactUs from '../components/ContactUs'

const Contact = () => {
  return (
    <>
      <div className='container'>
    <div className="bg-container">

 
    <nav className='contact-nav flex-1 pt-2'>
    
    <i class="fa-regular fa-house"></i>
    <NavLink className="contact-links-top" to="/">Homepage</NavLink>
    <i class="fa-regular fa-angles-right"></i>
    <NavLink className="contact-links-top" to="/contact">Contact</NavLink>
    </nav>
<div className="view-contact pt-1 ">
  <div className="desktop">
  <h1 className='contact-header pb-2'>Contact Us</h1>
  <ContactUs/>
</div>
<div className="consultation-card">
  <h2 className='h2-32 '>Get Online Consultation</h2>

<div className="consultation-form"></div>
<form noValidate>
<div className="pt-2">
  <label className='sb' >Full name<input className='consulation-input'  type="text" name="fullName" /></label>
 </div>
 <div className="pt-2">
  <label className='sb' >Email adress<input className='consulation-input' type="email" name="email" />  </label>
  </div>
  <div className="pt-2">
  <label className='sb' >Specialist
<select className=' select consulation-input pb-2' name="selectedSpecialist">
<option value="" disabled selected></option>
      <option  value="investment">Investment Advisor</option>
      <option value="business">Business Banking Consultant</option>
      <option value="technical">Technical support</option>
</select>
</label> 
</div>
<div className='pt-2'></div> 
<button className='btn btn-appointment'>
  Make an appointment
</button>
</form>
  
</div>


</div>
 </div>
<img src="../images/view-contact/map.svg" alt="map" />
   </div>
  

   </>
  )
}

export default Contact