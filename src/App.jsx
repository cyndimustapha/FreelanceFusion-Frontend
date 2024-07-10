import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobListings from './components/Job-listing/JobListings';
import JobDetails from './components/Job-listing/JobDetails';

function App() {
  return (
    <Routes>
      <Route path="/jobs" element={<JobListings />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;
