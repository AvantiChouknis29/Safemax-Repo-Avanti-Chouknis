import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './appointment.css'; // Link to your CSS file

const GetAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/getallappointments');
        console.log(response.data);
        // Add a "status" property to each appointment
        const appointmentsWithStatus = response.data.allappointments.map((appointment) => ({
          ...appointment,
          status: 'Pending',
        }));
        setAppointments(appointmentsWithStatus);
      } catch (err) {
        console.error('Error fetching appointments:', err);
        setError('Failed to load appointments');
      }
    };
    fetchAppointments();
  }, []);

  // Handler to toggle the status between "Pending" and "Confirm"
  const toggleStatus = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment._id === id
          ? { ...appointment, status: appointment.status === 'Pending' ? 'Confirm' : 'Pending' }
          : appointment
      )
    );
  };

  return (
    <div className="container">
      <h1>Appointments</h1>
      {error && <p>{error}</p>}
      {appointments.length === 0 ? (
        <p>No appointments available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>Comments</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id} style={{ color: 'whitesmoke' }}>
                <td>{appointment._id}</td>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{new Date(appointment.appointmentDate).toLocaleDateString()}</td>
                <td>{appointment.appointmentTime}</td>
                <td>{appointment.comments}</td>
                <td
                  onClick={() => toggleStatus(appointment._id)}
                  style={{ cursor: 'pointer', color: appointment.status === 'Pending' ? 'orange' : 'green' }}
                >
                  {appointment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetAppointments;
