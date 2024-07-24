import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./components/Auth";
import JobListings from "./components/Job-listing/JobListings";
import JobDetails from "./components/Job-listing/JobDetails";
import Messages from "./components/Messaging";
import JobPosting from "./pages/JobPosting";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
      <Route 
        path="/jobs" 
        element={<ProtectedRoute element={JobListings} />} 
      />
      <Route
        path="/jobs/posting"
        element={<ProtectedRoute element={JobPosting} />}
      />
      <Route
        path="/jobs/dashboard"
        element={<ProtectedRoute element={Dashboard} />}
      />
      <Route
        path="/jobs/:id"
        element={<ProtectedRoute element={JobDetails} />}
      />
      <Route 
        path="/messages" 
        element={<ProtectedRoute element={Messages} />} 
      />
    </Routes>
  );
}

export default App;
