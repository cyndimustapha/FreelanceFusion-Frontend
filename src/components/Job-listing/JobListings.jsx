import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchJobs } from '../../redux/jobListings/jobListings';
import Loading from './Loading';
import './styles/JobListings.css';

const JobListings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const { loading, jobs } = useSelector((state) => ({
    loading: state.jobs.loading,
    jobs: state.jobs.jobs
  }));

  if (!jobs || loading) {
    return <Loading />;
  }

  return (
    <div className="job-listings">
      <h1>Job Listings</h1>
      <ul>
        {jobs === undefined || jobs.length === 0 ? (
          <p>No Jobs Available at the Moment</p>
        ) : (
          jobs.map(job => (
            <li key={job.id}>
              <Link to={`/jobs/${job.id}`}>{job.title}<p>by {job.client_name}</p></Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default JobListings;
