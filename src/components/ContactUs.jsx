import React from 'react'

const ContactUs = () => {
  return (
    <>
    <div className='contact-email flex-1 pt-1'>

    <div className="contact-icon">
      <i className='icon-color' class="fa-regular fa-envelope"></i>
    </div>
    <div className="icon-content pb-2">
      <h2 className='pb-1'>Email Us</h2>
      <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
      <a className="contact-link flex-1 pt-2" href="#">Leave a message<i className="fa-sharp fa-solid fa-arrow-right"></i></a>
    </div>
    </div>

<div className='contact-email flex-1 pt-1'>

    <div className= "contact-icon">
      <i className='icon-color' class="fa-regular fa-users-medical"></i>
    </div>
    <div className="icon-content">
      <h2 className='pb-1'>Careers</h2>
      <p>We're always looking for new people to be a part of our growing team. Are you intrested?</p>
      <a className="contact-link flex-1 pt-2 pb-2" href="#">Send an application<i className="fa-sharp fa-solid fa-arrow-right"></i></a>
    </div>
</div>
</>
  )
}

export default ContactUs