import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import JobListings from './pages/JobListings';
import JobDetails from './pages/JobDetails';
import PostJob from './pages/PostJob';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/jobs" exact component={JobListings} />
        <ProtectedRoute path="/jobs/:id" component={JobDetails} />
        <ProtectedRoute path="/post-job" component={PostJob} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
