import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Page from './LandingPage/Page';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appointment from './LandingPage/Appointment';
import GetAppointments from './LandingPage/pages/GetAppointments';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Use Routes for routing */}
        <Routes>
          {/* Landing Page (Appointment component will be here) */}
          <Route path="/" element={<div><Page /><Appointment /></div>} />

          {/* Admin Page (Only GetAppointments component) */}
          <Route path="/admin" element={<GetAppointments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
