import React, { useEffect, useState } from 'react';
import axiosInstance from './axios';
import './Dashboard.css';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you store the JWT token in local storage
        const response = await axiosInstance.get('/jobs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobs(response.data.jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <section className="dashboard-content">
        <div className="dashboard-item">
          <h2>Your Jobs</h2>
          {jobs.length > 0 ? (
            <ul>
              {jobs.map((job) => (
                <li key={job.id}>{job.title}</li>
              ))}
            </ul>
          ) : (
            <p>No jobs available</p>
          )}
        </div>
        <div className="dashboard-item">
          <h2>Your Bids</h2>
          <p>Track your bids and job statuses.</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
