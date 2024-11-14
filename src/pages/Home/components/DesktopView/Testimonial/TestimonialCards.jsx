import React from 'react'
import StarRating from './StarRating'

const TestimonialCards = ({ item }) => {
  return (

    <div className="testimonial-box">
      <div className="apo-icon">
        <img src="./images/DesktopView/apo-icon.svg" alt="aprostrophe sign" />
      </div>

      <div className="pt-1 ">
        <StarRating rating={item.starRating} />
      </div>
      <p className="bd-text pt-2">{item.comment}</p>

      <div className="flex-1 pt-2">
        <img src={item.avatarUrl} alt="profile picture" />
        <div>
          <h5>{item.author}</h5>
          <p className="bd-text f-size-14">{item.jobRole}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards