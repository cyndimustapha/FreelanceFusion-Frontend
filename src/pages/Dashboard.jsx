import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Your Dashboard</h1>
      </header>
      <section className="dashboard-content">
        <div className="dashboard-section">
          <h2>Job Listings</h2>
          <p>Here you can find jobs posted by clients.</p>
        </div>
        <div className="dashboard-section">
          <h2>Your Bids</h2>
          <p>Track the bids you have made on various projects.</p>
        </div>
        <div className="dashboard-section">
          <h2>Your Profile</h2>
          <p>View and edit your profile details.</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
