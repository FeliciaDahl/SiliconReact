import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
   <div>
    <nav className='contact-nav flex-1'>
    <i class="fa-regular fa-house"></i><NavLink to="/">Homepage</NavLink>
    <i class="fa-regular fa-angles-right"></i>
    <NavLink to="/contact">Contact</NavLink>
    </nav>
   </div>
  )
}

export default Contact