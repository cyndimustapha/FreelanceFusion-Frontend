import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        Freelance Fusion
      </a>
      <ul className="navbar-links">
        <li><a href="/jobs">Available Jobs</a></li>
        <li><a href="/jobs/posting">Post Jobs</a></li>
        <li><a href="/messages">Messages</a></li>
        <li><a href="/notifications">Notifications</a></li>
        <li><a href="/jobs/dashboard">User Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;