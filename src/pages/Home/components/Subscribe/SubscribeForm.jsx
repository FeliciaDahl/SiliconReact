import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const SubscribeForm = () => {

const [submitted, setSubmitted] = useState(false)
const {register, handleSubmit, formState: { errors }, reset} = useForm()

 const handleOk = () => {
  setSubmitted(false)
  reset()

 }

 const onSubmit = async (data) => {
 
  const res = await fetch ('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: data.email})
  })

  if (res.ok) {
    setSubmitted(true)
  } 
  else {
    alert('Oops! Something went wrong while submitting. Please try again.')
    reset()
  }
}


 if(submitted) {
  return (

    <div className="submitted-bg">
    <div className="submitted-card">
      <i className="fa-sharp fa-solid fa-square-check"></i>
        <h2 className='pb-2'>Thank you for subscribing!</h2>
        <div className='submitted-btn'>  
        <button className='btn 'onClick={handleOk}>Close</button>
        </div>
    </div>
</div>
)
}

  return (

    <form onSubmit={handleSubmit(onSubmit)} noValidate >
      <div className="email-form">
        <input className="input-email" placeholder="✉︎ Your email" {...register("email", {required: 'The email field is required', pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Please enter a valid email address'}})}/>
      <button className="btn btn-email" type="submit">Subscribe</button>
      </div>
      <span className='input-error'>{errors.email && errors.email.message}</span>
  </form>

  )
}

export default SubscribeForm

