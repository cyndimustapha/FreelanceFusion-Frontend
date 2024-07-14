import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
        history.push('/login');
      }
    };
    
    fetchUserData();
  }, [history]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name}!</h2>
      <div className="dashboard-content">
        {user.role === 'client' ? (
          <div>
            <h3>Your Posted Jobs</h3>
            {/* Render client's posted jobs */}
          </div>
        ) : (
          <div>
            <h3>Your Active Bids</h3>
            {/* Render freelancer's active bids */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
