// src/components/DashBoard.jsx
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const history = useHistory();
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState({});
  
  useEffect(() => {
    // Fetch user info and job listings on mount
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const userResponse = await axios.get('/api/user', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(userResponse.data);
        
        const jobsResponse = await axios.get('/api/jobs', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setJobs(jobsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        history.push('/login');
      }
    };

    fetchUserData();
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}</h1>
      <button onClick={handleLogout}>Logout</button>
      
      <div className="job-listings">
        <h2>Job Listings</h2>
        {jobs.length > 0 ? (
          jobs.map(job => (
            <div key={job.id} className="job-item">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
            </div>
          ))
        ) : (
          <p>No job listings available.</p>
        )}
      </div>

      <div className="post-job">
        <h2>Post a New Job</h2>
        <Link to="/post-job">
          <button>Post Job</button>
        </Link>
      </div>

      <div className="bidding-management">
        <h2>Bidding Management</h2>
        <Link to="/bids">
          <button>Manage Bids</button>
        </Link>
      </div>

      <div className="messaging">
        <h2>Messaging</h2>
        <Link to="/messages">
          <button>Go to Messages</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
