import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom'
import { FeatureContext } from '../../components/contexts/FeatureContext'
import FeatureItems from '../Home/components/AppFeatures/FeatureItems'


const Feature = () => {


  const { featureItems } = useContext(FeatureContext)

  return (
    <>
      <div className="bg-light">
        <nav className='breadcrumb-nav flex-1 pb-2 pt-2'>
          <i className="fa-regular fa-house"></i>
          <NavLink className="breadcrumb-link" to="/">Homepage</NavLink>
          <i className="fa-regular fa-angles-right"></i>
          <NavLink className="breadcrumb-link" to="/feature">Features</NavLink>
        </nav>
        
        <div className="feature-view">
          <div className="feature-content">
            <h1 className="feature-header h1-40 pb-2">App Features</h1>
            <p className=" pb-2">Our platform is designed with user experience at its core,
              making financial management straightforward and enjoyable. Here are some of our popular features!</p>
          </div>
          <div className="benefit-box">
            {
              featureItems.map((item) => (<FeatureItems key={item.id} item={item} />))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature