import React, { useState } from 'react';
import './Contact.css';
import contactpic from 'C:\\Users\\Lenovo\\newpro\\src\\components\\Assets\\images\\contact.jpg'
import phonecall from 'C:\\Users\\Lenovo\\newpro\\src\\components\\Assets\\images\\call.webp'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="contact-container">
      <div className="contact-pic">
        {/* <div className="contact-item">
          <i className="fas fa-phone"></i>
          <p>+91-9958700699</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>contact@makemyevent.in</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>Saket District Centre, New Delhi, 110017</p>
        </div> */}
            <img src={contactpic} alt='contact'  />

      </div>
      <div className="emoji">
        <div className="reach">
          <img src={phonecall} alt='call'/>
        </div>
      <div className="contact-form">
        <h2>CONTACT US</h2>
        
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          </label>
          <button type="submit">SEND</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
