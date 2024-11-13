import React from 'react'
import Features from '../Home/components/AppFeatures/Features'
import { NavLink } from 'react-router-dom'

const Feature = () => {
  return (
    <>
   <div> //BREADCRUMB//
            <nav className='contact-nav flex-1 pb-2 pt-2'>
            <i className="fa-regular fa-house"></i>
            <NavLink className="contact-link-top" to="/">Homepage</NavLink>
            <i className="fa-regular fa-angles-right"></i>
            <NavLink className="contact-link-top" to="/FAQ">Features</NavLink>
          </nav>

    </div>

    <Features/>
    
    </>
  )
}

export default Feature