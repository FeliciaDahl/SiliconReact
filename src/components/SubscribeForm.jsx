import React, { useState } from 'react'

const SubscribeForm = () => {

const [formData, setFormData] = useState ({email: ''})
const [submitted, setSubmitted] = useState(false)

 const handleChange =(e) => {
  const {name, value} = e.target 
  setFormData({...formData, [name]: value})
 }

const handleSubmit = async (e) => {
  e.preventDefault()
  
  const res = await fetch ('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })

  if (res.ok) {
  setSubmitted(true)
  setFormData({email: ''})
  }

}
 if(submitted) {
  return (
    alert('Thank you for signing up on our newsletter!')
   
  )
 }
  return (

    <form onSubmit={handleSubmit} noValidate >
      <div className="email-form">
        <input className="input-email" type="email" name="email" value={formData.email} onChange= {handleChange} required placeholder="✉︎ Your email"/>
      <button className="btn btn-email" type="submit">Subscribe</button>
      </div>
    
  </form>

  )
}

export default SubscribeForm

