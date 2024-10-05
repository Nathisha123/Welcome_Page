import React from 'react';
import '../CSS/Contact.css';

function Contact() {
  return (
    <div className="contact-content">
    <div className='contact'>
      <h1 style={{color:'yellowgreen'}}>Contact Information</h1>
      <div className='contact-info'>
        <p><strong>Name:</strong> Nathisha</p>
        <p><strong>Email:</strong> nathisathia@gmail.com</p>
        <p><strong>Phone:</strong> +971 569643365</p>
        <p><strong>Residence:</strong> Dubai</p>
        <p><strong>LinkedIn:</strong> <a href='https://www.linkedin.com/in/nathisha-s-m-61586a185/' target='_blank' rel='noopener noreferrer'>linkedin.com/in/nathisha</a></p>
      </div>
    </div>
    </div>
  )
}

export default Contact