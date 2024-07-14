// src/pages/JobPosting.jsx
import React from 'react'
import './JobPosting.css';
import JobPostingForm from '../components/JobPostingForm';

function JobPosting() {
  return (
    <>
     <div className="job-posting-page">
      <JobPostingForm/>
      <div className="image-container">
        <img src="https://images.pexels.com/photos/27068170/pexels-photo-27068170/free-photo-of-a-black-and-white-photo-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Job related" />
      </div>
    </div>
    </>
  )
}

export default JobPosting