import React, { useEffect, useState } from 'react'
import TestimonialCards from './TestimonialCards'

const Testimonials = () => {

    const [testimonialsitems, setTestimonialsItems] = useState([])

    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonialsItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <section aria-label="testimonials" className="desktop-only">

            <div className="testimonial-card">
                <div className="testimonial-cards grid-1">

                <div className="h2-testimonial h2-32">
                    <h2>Clients are Loving Our App</h2>
                </div>
                    {
                        testimonialsitems.map((item) => (<TestimonialCards key={item.id} item={item} />))
                    }

                </div>
            </div>

        </section>
    )
}

export default Testimonials