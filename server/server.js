require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDb = require('./utils/db');  // Adjust path if needed
const app = express();
const PORT = process.env.PORT || 8080;

// Define the Appointment Schema
const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: String, required: true },
    comments: { type: String, required: false },
  },
  { timestamps: true }
);

// Create the Appointment Model
const Appointment = mongoose.model('Appointment', appointmentSchema);

// CORS middleware
app.use(cors({
  origin: 'http://localhost:3000',  // Your frontend URL
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json());  // For parsing JSON data in requests

// POST route to handle new appointments
app.post('/api/appointments', async (req, res) => {
  const { name, email, appointmentDate, appointmentTime, comments } = req.body;

  try {
    const newAppointment = new Appointment({
      name,
      email,
      appointmentDate,
      appointmentTime,
      comments,
    });

    await newAppointment.save();
    res.status(200).json({ message: 'Appointment request received and saved!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save appointment', error: error.message });
  }
});

// GET route to fetch all appointments
app.get('/api/getallappointments', async (req, res) => {
  try {
    const allappointments = await Appointment.find();  // Fetch all appointments from MongoDB
    if (allappointments.length === 0) {
      return res.status(404).json({ message: 'No appointments found' });
    }
    res.status(200).json({ allappointments });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve appointments', error: error.message });
  }
});

// Connect to DB and start server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
