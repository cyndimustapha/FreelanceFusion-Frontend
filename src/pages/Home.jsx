import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to FreelanceFusion</h1>
        <p>Your one-stop solution for finding freelance opportunities and hiring talent.</p>
        <div className="home-buttons">
          <a href="/signup" className="home-btn">Get Started</a>
          <a href="/login" className="home-btn">Login</a>
        </div>
      </header>
    </div>
  );
};

export default Home;
