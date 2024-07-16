import React, { useEffect, useState } from 'react';
import axiosInstance from './axios';
import './Home.css';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axiosInstance.get('/jobs');
        setJobs(response.data.jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to FreelanceFusion</h1>
        <p>Your one-stop solution for freelancers and clients</p>
      </header>
      <section className="home-overview">
        <h2>Overview</h2>
        <p>FreelanceFusion connects freelancers with clients, enabling seamless collaboration and project management.</p>
        <button className="home-button">Get Started</button>
      </section>
      <section className="home-jobs">
        <h2>Job Listings</h2>
        {jobs.length > 0 ? (
          <ul>
            {jobs.map((job) => (
              <li key={job.id}>{job.title}</li>
            ))}
          </ul>
        ) : (
          <p>No jobs available</p>
        )}
      </section>
    </div>
  );
};

export default Home;
