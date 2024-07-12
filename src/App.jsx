import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobPosting from './pages/JobPosting';
import JobListings from './components/Job-listing/JobListings';
import JobDetails from './components/Job-listing/JobDetails';

function App() {
  return (
    <Routes>
      <Route path="/jobs" element={<JobListings />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/jobs/posting" element={<JobPosting />} />
    </Routes>
  );
}

export default App;
