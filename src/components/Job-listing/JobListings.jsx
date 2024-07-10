import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dummyJobs from './dummyJobs';
import './Loading';
import './styles/JobListings.css';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(dummyJobs);
  }, []);

  if (!jobs) {
    return <Loading />;
  }

  return (
    <div className="job-listings">
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
