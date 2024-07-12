import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

const Home = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className="home">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/job-listings">Job Listings</Link>
        <Link to="/post-job">Post Job</Link>
        <div className="dashboard-icon" onClick={toggleDashboard}>
          <img src="dashboard-icon.png" alt="Dashboard" />
        </div>
      </nav>
      
      <h1>Welcome to FreelanceFusion</h1>
      <p>Your one-stop platform for freelancers and clients to connect and collaborate on various projects.</p>
      <Link to="/signup">
        <button>Get Started</button>
      </Link>

      {showDashboard && <Dashboard />}
    </div>
  );
};

export default Home;
