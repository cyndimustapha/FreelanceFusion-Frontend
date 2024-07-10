import React from 'react';

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      <h2>Your Jobs</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Budget: ${job.budget}</p>
            {/* Add more job details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;