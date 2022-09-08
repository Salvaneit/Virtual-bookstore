import React from 'react'
import './ContactUs.css'

function ContactUs() {

  function handleSubmit(e) {
    e.preventDefault()
    document.getElementById("contact-form").reset();
  }

  return (
    <div className='contact-us'>
      <h2>Contact us</h2>
      <p>Our friendly team would like to hear from you 😊</p>
      <form className='contact-form' onSubmit={handleSubmit} id='contact-form' >
        <input placeholder='Full name' type='text' />
        <input placeholder='Email' type='text' />
        <input placeholder='Phone number' type='number' />
        <textarea placeholder='Message' type='text' className='message' />
        <input type='submit' value='Send Message' className='send-btn' />
      </form>
    </div>
  )
}

export default ContactUs