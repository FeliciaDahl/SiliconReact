import React from 'react'

const ContactCardItems = ({icon, iconAlt, question, color}) => {

  return (
    
    <div className="card">
        <img className="pb-1" src={icon} alt={iconAlt}/>
        <p className="bd-text pb-2 f-size-14">{question}</p>
        <a className={`${color} pb-1 f-size-14`}  href="#">Contact us!  <i className="fa-regular fa-arrow-right"></i></a>
    </div>

  )
}

export default ContactCardItems