import React from 'react'

const LocationItems = ({ location, onClick }) => {

  return (
    <div className="adress-card" onClick={onClick}>
    <h3 className="h3-24 pb-1">{location.name}</h3>
    <div className="information-list">
      
      <div className="info-items">
        <i className="fa-light fa-location-dot"></i>
        <p className='google-link'>{location.address}</p>
      </div>

      <div className="info-items">
        <i className="fa-regular fa-phone-volume"></i>
        <p>{location.phone}</p>
      </div>
     
      <div className="info-items">
        <i className="fa-regular fa-clock"></i>
        <div className='hours'>
        <p >{location.hours1}</p>
        <p>{location.hours2}</p>
        </div>
      </div>
    </div>
  </div>
)
}

export default LocationItems