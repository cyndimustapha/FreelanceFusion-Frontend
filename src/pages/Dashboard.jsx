import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Dashboard.css';
import Navbar from "./Navbar";
import Loading from '../components/Job-listing/Loading';
import { fetchJobs } from '../redux/jobListings/jobListings.js';

const Dashboard = () => {
  const [bids, setBids] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());

    const fetchBids = async () => {
      try {
        const response = await fetch(`https://freelance-fusion-backend.vercel.app/api/user/bids`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setBids(data);
          console.log(data);
        } else {
          console.error('Failed to fetch bids');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBids();
  }, [dispatch]);

  const { loading, jobs } = useSelector((state) => ({
    loading: state.jobs.loading,
    jobs: state.jobs.jobs
  }));

  if (loading || !jobs || !user || !bids) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
        </header>
        <section className="dashboard-content">
          <div className="dashboard-item">
            <h2>Your Jobs</h2>
            <p>Jobs you have posted.</p>
            <ul>
              {jobs.map((job) => (
                <li key={job.id}>{job.title}</li>
              ))}
            </ul>
          </div>
          <div className="dashboard-item">
            <h2>Your Bids</h2>
            <p>Track your bids and job statuses.</p>
            <ul>
              {bids.map((bid) => (
                <li key={bid.id}>{bid.job.title} @ {bid.amount}<br />Selected - {bid.selected ? 'Yes' : 'No'}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
