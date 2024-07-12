import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/jobs', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="job-listings">
      <h1>Job Listings</h1>
      {jobs.length > 0 ? (
        jobs.map(job => (
          <div key={job.id} className="job-item">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
          </div>
        ))
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
};

export default JobListings;
