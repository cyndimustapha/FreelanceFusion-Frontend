import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to FreelanceFusion</h1>
      <p>Your go-to platform for hiring freelancers and finding freelance jobs.</p>
      <Link to="/signup">Get Started</Link>
    </div>
  );
};

export default Home;
