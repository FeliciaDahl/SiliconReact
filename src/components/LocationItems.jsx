import React from 'react'

const LocationItems = ({ location, onClick }) => {

  return (
    <div className="adress-card" onClick={onClick}>
    <h3 className="h3-24 pb-1">{location.name}</h3>
    <div className="information-list">
      <div className="info-items">
        <i className="fa-light fa-location-dot"></i>
        <p>{location.address}</p>
      </div>
      <div className="info-items">
        <i className="fa-regular fa-phone-volume"></i>
        <p>{location.phone}</p>
      </div>
      <div className="info-items">
        <i className="fa-regular fa-clock"></i>
        <p>{location.hours}</p>
      </div>
    </div>
  </div>
);
};

export default LocationItems