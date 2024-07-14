// src/components/BidForm.jsx
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
    <Form onSubmit={handleBidSubmit}>
      <Form.Group controlId="bidAmount">
        <Form.Label>Bid Amount</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your bid amount"
          value={Amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Place Bid
      </Button>
    </Form>
  );
};

export default BidForm;