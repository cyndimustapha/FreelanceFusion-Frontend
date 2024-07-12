import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/signup', { email, password, role });
      alert('Signup successful, please login');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="client">Client</option>
          <option value="freelancer">Freelancer</option>
        </select>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
