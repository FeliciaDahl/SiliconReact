import React, { useState } from 'react'
import LocationItem from './LocationItems'
import { Link } from 'react-router-dom'

const locations = [
  {
    name: 'Office Kentucky',
    address: (
      <Link to="https://maps.app.goo.gl/ZQCPd96ZMzoTvpiw8" target="_blank" rel="noopener noreferrer">
        4517 Washington Ave. Manchester, Kentucky 39495 <i className="external fa-regular fa-arrow-up-right-from-square"></i>
      </Link>
    ),
    phone: '(406) 555-0120',
    hours1: 'Mon – Fri: 9:00 am – 22:00 am',
    hours2: 'Sat – Sun: 9:00 am – 20:00 am',
    mapImage: '../images/ContactView/Kentuckey.jpg', 
  },
  {
    name: 'Office New Jersey',
    address: (
      <Link to="https://maps.app.goo.gl/LS8XHw22iuXt4GyB7" target="_blank" rel="noopener noreferrer">
        2464 Royal Ln. Mesa, New Jersey 45463 <i className="external fa-regular fa-arrow-up-right-from-square"></i>
      </Link>
    ),
    phone: '(406) 544-0123',
    hours1: 'Mon – Fri: 9:00 am – 22:00 am', 
    hours2: 'Sat – Sun: 9:00 am – 20:00 am',
    mapImage: '../images/ContactView/NewJersey.jpg', 
  },
]

const LocationComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  return (
    <div className="location pt-2 pb-2">
      <img className="map pb-1" src={selectedLocation.mapImage} alt="map" />
      <div className="adress-cards">
        {locations.map((location, index) => (
          <LocationItem key={index} location={location} onClick={() => setSelectedLocation(location)} />
        ))}
      </div>
    </div>
  )
}

export default LocationComponent