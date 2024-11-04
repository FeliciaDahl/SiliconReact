
import React, { useState } from 'react'


import { useForm } from 'react-hook-form'

const ConsultationForm = () => {

  const [submitted, setSubmitted] = useState(false)
  const {register, handleSubmit, formState: { errors }, reset} = useForm()
  
  const handleOk = () => {
    setSubmitted(false)
    reset()
  
   }

 if(submitted) {
  return (

    <div className="submitted-bg">
    <div className="submitted-card">
      <i class="fa-sharp fa-solid fa-square-check"></i>
        <h2 className='pb-1'>Thank you for contacting us!</h2>
        <p className='pb-2'>We will reach out to you within 1-3 days!</p>
        <div className='submitted-btn'>  
        <button className='btn 'onClick={handleOk}>Close</button>
        </div>
    </div>
</div>

)
}
const onSubmit = async (data) => {

const res = await fetch ('https://win24-assignment.azurewebsites.net/api/forms/contact', {
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
  reset()
  }
  if (!res.ok) {
    console.log(res.status);
  }
}
  return (
    <>
      <div className="consultation-form">

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="pt-2">
            <label><h4>Full name</h4>
              <input className='consulation-input' type="text" {...register('name', {required: 'The name field is required',minLength: { 
              value: 3, 
              message: 'The name must be at least 3 characters long'},})}/></label>
              <span>{errors.name && errors.name.message}</span>
          </div>

          <div className="pt-2">
            <label><h4>Email adress</h4>
              <input className='consulation-input'{...register("email", {required: 'The email field is required', pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Please enter a valid email address'}})}/> </label>
                <span>{errors.email && errors.email.message}</span>
          </div>

          <div className="pt-2">
            <label><h4>Specialist</h4>
              <select className=' select consulation-input pb-2'{...register('select', { required: 'Please select one of the options' })}>
                <option value="" disabled selected ></option>
                <option value="investment">Investment Advisor</option>
                <option value="business">Business Banking Consultant</option>
                <option value="technical">Technical support</option>
                <option value="other">Other</option>
              </select>
            </label>
            <span>{errors.select && errors.select.message}</span>
          </div>
          <div className="pt-2">
            <button  type='submit' className='btn btn-appointment'>
              Make an appointment
            </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default ConsultationForm