import React from 'react';

const FreelancerDashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <h2>Your Job Bids</h2>
      {/* Display list of job bids */}
    </div>
  );
};

export default FreelancerDashboard;
