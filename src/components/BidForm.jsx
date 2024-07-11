/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const BidForm = ({ jobId }) => {
  const { auth } = useContext(AuthContext);
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/bids', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.access_token}`,
        },
        body: JSON.stringify({ amount, job_id: jobId }),
      });
      if (response.ok) {
        alert('Bid placed successfully');
      } else {
        console.error('Error placing bid', await response.json());
      }
    } catch (error) {
      console.error('Error placing bid', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Bid Amount</label>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">Place Bid</button>
    </form>
  );
};

export default BidForm;
