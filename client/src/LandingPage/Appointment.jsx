import React, { useState } from 'react';
import axios from 'axios';
import './Appointment.css'
const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    appointmentDate: '',
    appointmentTime: '',
    comments: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend
      await axios.post('http://localhost:8080/api/appointments', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <div id="appointment">
      <h2 style={{color:'white'}}>Book an Appointment</h2>
      {submitted && <p>Your appointment request has been submitted!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{color:'whitesmoke'}}>Name:</label>
          <input style={{color:'whitesmoke'}}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label style={{color:'whitesmoke'}}>Email:</label>
          <input style={{color:'whitesmoke'}}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label style={{color:'whitesmoke'}}>Preferred Appointment Date:</label>
          <input style={{color:'whitesmoke'}}
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label style={{color:'whitesmoke'}}>Preferred Appointment Time:</label>
          <input style={{color:'whitesmoke'}}
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label style={{color:'whitesmoke'}}>Comments:</label>
          <textarea style={{color:'whitesmoke'}}
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      

    <footer className="footer" >
  <div className="footer-content" >
    <p style={{color:'whitesmoke'}}>&copy; {new Date().getFullYear()} SafeMax Security. All rights reserved.</p>
    <div className="social-icons" >
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{color:'whitesmoke'}}>Facebook</a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{color:'whitesmoke'}}>Twitter</a>
      <a href="https://www.linkedin.com/company/safemax-security/" target="_blank" rel="noopener noreferrer" style={{color:'whitesmoke'}}>LinkedIn</a>
     <br></br><br></br><br></br><br></br>
    </div> <h5>By Avanti Chouknis </h5>
  </div>
</footer>
    </div>
    
  );
};

export default Appointment;
