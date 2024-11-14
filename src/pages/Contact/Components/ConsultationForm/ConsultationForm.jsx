
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const ConsultationForm = () => {

  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: { select: "" }
  })


  const handleOk = () => {
    setSubmitted(false)
    reset()

  }

  const onSubmit = async (data) => {

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName: data.name,
        email: data.email,
        specialist: data.select

      })
    })

    if (res.ok) {
      setSubmitted(true)
    } 
    else {
      alert('Oops! Something went wrong while submitting. Please try again.')
      reset()
    }
  }

  if (submitted) {
    return (

      <div className="submitted-bg">
        <div className="submitted-card">
          <i className="fa-sharp fa-solid fa-square-check"></i>
          <h2 className='pb-1'>Thank you for contacting us!</h2>
          <p className='pb-2'>We will reach out to you within 1-3 days!</p>
          <div className='submitted-btn'>
            <button className='btn ' onClick={handleOk}>Close</button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="consultation-form">

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="pt-2">
            <label><h4>Full name</h4>
              <input className='input consulation-input' type='text' {...register('name', {
                required: 'The name field is required', pattern: {
                  value: /^(?=.*[A-Za-zÀ-ÿ]{2})(?=.*[ '-][A-Za-zÀ-ÿ]{2})[A-Za-zÀ-ÿ]{2,}([ '-][A-Za-zÀ-ÿ]{2,}){1,}$/,
                  message: 'Please enter both your first and last name, each with min 2 letters'
                },
              })} /></label>
            <span className='input-error'>{errors.name && errors.name.message}</span>
          </div>

          <div className="pt-2">
            <label><h4>Email adress</h4>
              <input className='input consulation-input'{...register('email', {
                required: 'The email field is required', pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address'
                }
              })} /> </label>
            <span className='input-error'>{errors.email && errors.email.message}</span>
          </div>

          <div className="pt-2">
            <label><h4>Specialist</h4>
              <select className='select input consulation-input '{...register('select', { required: 'Please select one of the options' })}>
              <option value="" disabled>Select a specialist</option>
                <option value="investment">Investment Advisor</option>
                <option value="business">Business Banking Consultant</option>
                <option value="technical">Technical support</option>
                <option value="other">Other</option>
              </select>
            </label>
            <span className='input-error'>{errors.select && errors.select.message}</span>
          </div>
          <div className="pt-2">
            <button type='submit' className='btn btn-appointment'>
              Make an appointment
            </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default ConsultationForm