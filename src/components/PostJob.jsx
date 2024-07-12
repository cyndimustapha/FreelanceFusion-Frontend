import React, { useState } from 'react';
import axios from 'axios';

const PostJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('/api/jobs', {
        title,
        description,
        budget
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTitle('');
      setDescription('');
      setBudget('');
      alert('Job posted successfully');
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div className="post-job">
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Budget:
          <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} required />
        </label>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
