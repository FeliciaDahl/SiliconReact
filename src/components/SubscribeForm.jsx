import React from 'react'

const SubscribeForm = () => {
  return (
    <form>
    <div className="email-form">
    <input className="input-email" type="email" name="email" required placeholder="✉︎ Your email"/>
    <button className="btn btn-email">Subscribe</button>
    </div>
</form>
  )
}

export default SubscribeForm

