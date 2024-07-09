import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './JobDetails.css';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="job-details">
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>Budget: {job.budget}</p>
      <p>Client: {job.client_id}</p>
      <p>Status: {job.status}</p>
    </div>
  );
};

export default JobDetails;
