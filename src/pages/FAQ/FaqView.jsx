import React from 'react'
import { NavLink } from 'react-router-dom'

const FaqView = () => {

    
  return (
    <div>
            <nav className='contact-nav flex-1 pb-2 pt-2'>
            <i className="fa-regular fa-house"></i>
            <NavLink className="contact-link-top" to="/">Homepage</NavLink>
            <i className="fa-regular fa-angles-right"></i>
            <NavLink className="contact-link-top" to="/FAQ">FAQ</NavLink>

          </nav>

    </div>
  )
}

export default FaqView