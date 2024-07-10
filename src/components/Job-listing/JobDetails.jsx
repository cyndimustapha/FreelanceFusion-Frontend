import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dummyJobs from './dummyJobs';
import Loading from './Loading';
import './styles/JobDetails.css';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const job = dummyJobs.find((job) => job.id === parseInt(id));
    setJob(job);
  }, [id]);

  if (!job) {
    return <Loading />;
  }

  return (
    <div className="job-details">
      <h1 className="job-title">{job.title}</h1>
      <p className="job-description">{job.description}</p>
      <p className="job-budget">Budget: ${job.budget}</p>
      <p className="job-client-id">Client ID: {job.client_id}</p>
      <p className="job-status">Status: {job.status}</p>
    </div>
  );
};

export default JobDetails;
