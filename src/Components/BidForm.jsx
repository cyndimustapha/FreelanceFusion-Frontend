// src/components/BidForm.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const BidForm = ({ jobId }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:5000/jobs/${jobId}/bid`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="bidAmount">
        <Form.Label>Bid Amount</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your bid amount"
          value={amount}
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
