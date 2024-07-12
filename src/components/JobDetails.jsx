import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/api/jobs/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-details">
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p><strong>Budget:</strong> ${job.budget}</p>
      <p><strong>Posted by:</strong> {job.clientName}</p>
    </div>
  );
};

export default JobDetails;
