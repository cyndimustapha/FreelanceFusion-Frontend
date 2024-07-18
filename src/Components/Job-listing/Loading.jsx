// src/components/Job-listing/Loading.jsx
import React from 'react';
import './styles/loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Loading;