// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }
        const userResponse = await axios.get('/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(userResponse.data);
        const jobsResponse = await axios.get('/api/jobs', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setJobs(jobsResponse.data);
      } catch (error) {
        console.error(error);
        navigate('/login');
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {user && <p>Welcome, {user.name}!</p>}
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
