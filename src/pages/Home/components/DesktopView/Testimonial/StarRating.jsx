import React from 'react';


const StarRating = ({ rating }) => {
    
  const numberOfStars = Math.min(Math.max(rating, 0), 5);
  const totalStars = 5;

  return (
   <>
      {Array.from({ length: totalStars }, (_, index) => {
        return (
          <span
            key={index}
            className={`star ${index < numberOfStars ? 'filled' : 'empty'}`}>
            ★
          </span>
        );
      })}
 </>
  );
};

export default StarRating; 