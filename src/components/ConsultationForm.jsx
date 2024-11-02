import React from 'react'

const ConsultationForm = () => {
  return (
    <>
      <div className="consultation-form">
        <form noValidate>
          <div className="pt-2">
            <label><h4>Full name</h4><input className='consulation-input' type="text" name="fullName" /></label>
          </div>
          <div className="pt-2">
            <label><h4>Email adress</h4><input className='consulation-input' type="email" name="email" />  </label>
          </div>
          <div className="pt-2">
            <label><h4>Specialist</h4>
              <select className=' select consulation-input pb-2' name="selectedSpecialist">
                <option value="" disabled selected></option>
                <option value="investment">Investment Advisor</option>
                <option value="business">Business Banking Consultant</option>
                <option value="technical">Technical support</option>
              </select>
            </label>
          </div>
          <div className="pt-2">
            <button className='btn btn-appointment'>
              Make an appointment
            </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default ConsultationForm