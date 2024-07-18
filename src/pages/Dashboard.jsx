import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './Dashboard.css';
import Navbar from "./Navbar"
import Loading from '../components/Job-listing/Loading';
import { fetchJobs } from '../redux/jobListings/jobListings';


const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const { loading, jobs } = useSelector((state) => ({
    loading: state.jobs.loading,
    jobs: state.jobs.jobs
  }));


  if (loading || !jobs || !user) {
    return <Loading />;
  }

  return (
    <><Navbar/>
    <div className="dashboard">
    <header className="dashboard-header">
      <h1>Dashboard</h1>
    </header>
    <section className="dashboard-content">
      <div className="dashboard-item">
        <h2>Your Jobs</h2>
        <ul>
            {jobs.map((job) => (
              <li key={job.id}>{job.title}</li>
            ))}
          </ul>
        
      </div>
      <div className="dashboard-item">
        <h2>Your Bids</h2>
        <p>Track your bids and job statuses.</p>
      </div>
    </section>
  </div>
    </>
  );
};

export default Dashboard;