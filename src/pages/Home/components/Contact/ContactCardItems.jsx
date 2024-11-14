import React from 'react'
import { NavLink } from 'react-router-dom'

const ContactCardItems = ({ icon, iconAlt, question, color }) => {

  return (

    <div className="card">
      <img className="pb-1" src={icon} alt={iconAlt} />
      <p className="bd-text pb-2 f-size-14">{question}</p>
      <NavLink className={`${color} pb-1 f-size-14`} to="/contact"> Contact us!  <i className="fa-regular fa-arrow-right"></i></NavLink>
    </div>

  )
}

export default ContactCardItems