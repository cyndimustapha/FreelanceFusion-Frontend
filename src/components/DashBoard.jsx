import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileSummary from './ProfileSummary';
import JobList from './JobList';
import Notifications from './Notifications';

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [userJobs, setUserJobs] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch user profile
    axios.get('/api/user/profile')
      .then(response => setUserProfile(response.data))
      .catch(error => console.error('Error fetching user profile:', error));

    // Fetch user jobs
    axios.get('/api/user/jobs')
      .then(response => setUserJobs(response.data))
      .catch(error => console.error('Error fetching user jobs:', error));

    // Fetch notifications
    axios.get('/api/user/notifications')
      .then(response => setNotifications(response.data))
      .catch(error => console.error('Error fetching notifications:', error));
  }, []);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
        <nav>
        <Link to="/post-job">Post a Job</Link>
        <Link to="/job-listings">Browse Jobs</Link>
        <Link to="/profile">Your Profile</Link>
      </nav>
      <ProfileSummary profile={userProfile} />
      <JobList jobs={userJobs} />
      <Notifications notifications={notifications} />
    </div>
  );
};

export default Dashboard;