import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import JobListings from './components/Job-listing/JobListings';
import JobDetails from './components/Job-listing/JobDetails';
import Notifications from './components/Notifications';
import ProfileSummary from './components/ProfileSummary';
import BidList from './components/BidList';
import Chat from './components/Chat';
import JobPosting from './pages/JobPosting';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<JobListings />} />
      <Route path="/jobs/posting" element={<JobPosting />} />
      <Route path="/jobs/dashboard" element={<Dashboard />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/messages" element={<Chat />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
