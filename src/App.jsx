import React from 'react'
import JobPosting from './pages/JobPosting'
import Home from './pages/Home'
function App() {
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
