import React from 'react'
import Features from '../Home/components/AppFeatures/Features'
import { NavLink } from 'react-router-dom'

const Feature = () => {
  return (
  <>
    <div>
      <nav className='breadcrumb-nav flex-1 pb-2 pt-2'>
        <i className="fa-regular fa-house"></i>
        <NavLink className="breadcrumb-link" to="/">Homepage</NavLink>
        <i className="fa-regular fa-angles-right"></i>
        <NavLink className="breadcrumb-link" to="/feature">Features</NavLink>
      </nav>

    </div>

      <Features />

  </>
  )
}

export default Feature