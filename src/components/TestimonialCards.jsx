import React from 'react'

const TestimonialCards = ({item}) => {
  return (

    <div className="testimonial-box">
    <div className="apo-icon">
        <img src="./images/dt-info/apo-icon.svg" alt="aprostrophe sign" />
    </div>
    <img className="pt-2 pb-1" src={item.imageStars} alt={item.imageStarsAlt} />
    <p className="bd-text pt-2">{item.content}</p>

    <div className="flex-1 pt-2">
        <img src={item.profileImage} alt={item.profileImage} />
        <div>
            <h5>{item.name}</h5>
            <p className="bd-text f-size-14">{item.profession}</p>
        </div>
    </div>
</div>
  )
}

export default TestimonialCards