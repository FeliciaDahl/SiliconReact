import React, { useState } from 'react';
import LocationItem from './LocationItems'; 
import { Link } from 'react-router-dom';

const locations = [
  {
    name: 'Office Kentucky',
    address: (
      <Link to="https://maps.app.goo.gl/ZQCPd96ZMzoTvpiw8" target="_blank" rel="noopener noreferrer">
        4517 Washington Ave. Manchester, Kentucky 39495
      </Link>
    ),
    phone: '(406) 555-0120',
    hours: 'Mon – Fri: 9:00 am – 22:00 am, Sat – Sun: 9:00 am – 20:00 am',
    mapImage: '../images/view-contact/Kentuckey.jpg', // Change to actual Kentucky map image
  },
  {
    name: 'Office New Jersey',
    address: (
      <Link to="https://maps.app.goo.gl/LS8XHw22iuXt4GyB7" target="_blank" rel="noopener noreferrer">
        2464 Royal Ln. Mesa, New Jersey 45463
      </Link>
    ),
    phone: '(406) 544-0123',
    hours: 'Mon – Fri: 9:00 am – 22:00 am, Sat – Sun: 9:00 am – 20:00 am',
    mapImage: '../images/view-contact/NewJersey.jpg', // Change to actual New Jersey map image
  },
];

const LocationComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="location pt-2 pb-2">
      <img className="map pb-1" src={selectedLocation.mapImage} alt="map" />
      <div className="adress-cards">
        {locations.map((location, index) => (
          <LocationItem key={index} location={location} onClick={() => setSelectedLocation(location)} />
        ))}
      </div>
    </div>
  );
};

export default LocationComponent;