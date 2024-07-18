import React, { useEffect, useState } from 'react';
import axiosInstance from './axios';
import './Home.css';
import Navbar from "./Navbar"

const Home = () => {
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
   <> <Navbar/>
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
     </section>
   </div>
   </>
  );
};

export default Home;