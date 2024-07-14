//src/components/Job-listing/JobDetails.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../redux/jobListings/jobDetails';
import Loading from './Loading';
import './styles/JobDetails.css';

const JobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [id, dispatch]);

  const { loading, details } = useSelector((state) => ({
    loading: state.details.loading,
    details: state.details.details
  }));

  if (!details || loading) {
    return <Loading />;
  }

  return (
    <div className="job-details">
      <h1 className="job-title">{details.title}</h1>
      <p className="job-description">{details.description}</p>
      <p className="job-budget">Budget: ${details.budget}</p>
      <p className="job-client-id">Client Name: {details.client_name}</p>
      <p className="job-status">Status: {details.status}</p>
    </div>
  );
};

export default JobDetails;
