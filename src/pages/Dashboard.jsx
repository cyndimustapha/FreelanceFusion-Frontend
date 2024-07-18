import React, { useEffect, useState } from 'react';
import axiosInstance from './axios';
import './Dashboard.css';
import Navbar from "./Navbar"

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axiosInstance.get('/jobs');
        setJobs(response.data.jobs);
      } catch (error) {
        setError(error);
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <><Navbar/>
    <div className="dashboard">
    <header className="dashboard-header">
      <h1>Dashboard</h1>
    </header>
    <section className="dashboard-content">
      <div className="dashboard-item">
        <h2>Your Jobs</h2>
        {error ? (
          <p>Error fetching jobs: {error.message}</p>
        ) : jobs.length > 0 ? (
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
    </>
  );
};

export default Dashboard;