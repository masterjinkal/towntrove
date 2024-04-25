import React, { useState } from 'react';
import './CSS/ContactUs.css'; // Import CSS file for styling



export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement logic to handle form submission,
    // such as sending the data to a server or displaying a confirmation message.
    console.log('Form submitted:', formData);
    // You can also reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  }

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p className="contact-info">Got a question, feedback, or just want to say hi? Fill out the form below and we'll get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}


