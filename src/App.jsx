import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import JobListings from './components/JobListings';
import JobDetails from './components/JobDetails';
import PostJob from './components/PostJob';
import Bids from './components/Bids';
import Profile from './components/Profile';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} />
        <PrivateRoute path="/job-listings" component={JobListings} isAuthenticated={isAuthenticated} />
        <PrivateRoute path="/job-details/:id" component={JobDetails} isAuthenticated={isAuthenticated} />
        <PrivateRoute path="/post-job" component={PostJob} isAuthenticated={isAuthenticated} />
        <PrivateRoute path="/bids" component={Bids} isAuthenticated={isAuthenticated} />
        <PrivateRoute path="/profile" component={Profile} isAuthenticated={isAuthenticated} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default App;
