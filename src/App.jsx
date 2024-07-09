import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobListings from './components/JobListings';
import JobDetails from './components/JobDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/jobs" component={JobListings} />
        <Route path="/jobs/:id" component={JobDetails} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;
