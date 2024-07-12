import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import JobListings from './components/JobListings';
import JobDetails from './components/JobDetails';
import PostJob from './components/PostJob';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/dashboard" component={DashBoard} />
        <ProtectedRoute path="/jobs" exact component={JobListings} />
        <ProtectedRoute path="/jobs/:id" component={JobDetails} />
        <ProtectedRoute path="/post-job" component={PostJob} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
