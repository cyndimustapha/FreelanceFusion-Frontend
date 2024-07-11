import React from 'react';

const ClientDashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <h2>Your Posted Jobs</h2>
      {/* Display list of posted jobs */}
    </div>
  );
};

export default ClientDashboard;
