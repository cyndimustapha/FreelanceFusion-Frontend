import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to FreelanceFusion</h1>
        <p>Your one-stop platform for freelance services and job postings.</p>
      </header>
      <section className="home-content">
        <div className="home-info">
          <h2>For Clients</h2>
          <p>Post jobs, browse freelancers, and hire the best talent for your projects.</p>
        </div>
        <div className="home-info">
          <h2>For Freelancers</h2>
          <p>Showcase your skills, bid on projects, and grow your freelance business.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
