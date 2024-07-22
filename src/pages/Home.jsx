import React from 'react';
import './Home.css';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <header className="homepage-header">
          <h1>Welcome to Freelance Fusion</h1>
          <p>Your one-stop destination for freelancing opportunities</p>
          <a href="/jobs" className="cta-button">Get Started</a>
        </header>
        <section className="features">
          <div className="feature">
            <h2>Find Jobs</h2>
            <p>Browse through a variety of job listings and find the perfect job that matches your skills.</p>
          </div>
          <div className="feature">
            <h2>Post Jobs</h2>
            <p>Post your job listings and find the best freelancers to get your work done.</p>
          </div>
          <div className="feature">
            <h2>Manage Projects</h2>
            <p>Keep track of your projects and communicate with freelancers seamlessly.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;