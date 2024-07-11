// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import JobListing from './components/Job-listing/JobListings';
import JobDetails from './components/Job-listing/JobDetails';
import ProfileSummary from './components/ProfileSummary';
import Notifications from './components/Notifications';
import JobPosting from './pages/JobPosting';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/jobs" element={<JobListing />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/profile" element={<ProtectedRoute><ProfileSummary /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        <Route path="/post-job" element={<ProtectedRoute><JobPosting /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
