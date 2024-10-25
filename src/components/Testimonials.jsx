import React, { useState } from 'react'
import TestimonialCards from './TestimonialCards'

const Testimonials = () => {

    const [items, setItems] = useState([
        {
            imageStars:"./images/dt-info/rating-1.svg", imageStarsAlt:"four stars", content:"Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.",
            profileImage:"./images/dt-info/fannie.svg", profileImageAlt:"image of Fannie Summers", name:"Fannie Summers", profession:"Designer"
        },
        {
            imageStars:"./images/dt-info/rating-2.svg", imageStarsAlt:"five stars", content:"Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.",
            profileImage:"./images/dt-info/albert.svg", profileImageAlt:"image of Albert Flores", name:"Albert Flores", profession:"Developer"
        }
    ])
    return (

<section aria-label="testimonials" className="desktop-only">

    <div className="testimonial-card">
        <div className="testimonial-cards grid-1">

            <div className="h2-testimonial h2-32">
                <h2>Clients are Loving Our App</h2>
            </div>
          {
            items.map((item, index) => (<TestimonialCards key={index} item={item}/>))
          }

            </div>
        </div>

</section>
)
}

export default Testimonials