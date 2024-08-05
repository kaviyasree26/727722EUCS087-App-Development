// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import TechCorpDashboard from './assets/TechCorpDashboard';
import CloudTeamDashboard from './assets/CloudTeamDashboard';
import CreativeMindDashboard from './assets/CreativeMindDashboard';
import CryptexDashboard from './assets/CryptexDashboard';
import DevsHandDashboard from './assets/DevsHandDashboard';
import InnovateDashboard from './assets/InnovateDashboard';
import NextGenDashboard from './assets/NextGenDashboard';
import TeamCodeDashboard from './assets/TeamCodeDashboard';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import JobList from './components/JobList';
import AdminDashboard from './components/AdminDashboard';
import ApplyPage from './components/ApplyPage';



import './styles.css';
import './techcorp.css';
import './cloudteam.css';
import './teamcode.css';
import './nextgen.css';
import './innovate.css';
import './devshand.css';
import './cryptex.css';
import './creativemind.css';



function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/techcorp-dashboard" element={<TechCorpDashboard />} />
        <Route path="/cloudteam-dashboard" element={<CloudTeamDashboard />} />
        <Route path="/creativemind-dashboard" element={<CreativeMindDashboard />} />
        <Route path="/cryptex-dashboard" element={<CryptexDashboard />} />
        <Route path="/devshand-dashboard" element={<DevsHandDashboard />} />
        <Route path="/innovate-dashboard" element={<InnovateDashboard />} />
        <Route path="/nextgen-dashboard" element={<NextGenDashboard />} />
        <Route path="/teamcode-dashboard" element={<TeamCodeDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/apply" element={<ApplyPage />} />
        
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
