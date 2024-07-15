// src/components/BidList.jsx
import React, { useEffect, useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const BidList = ({ jobId }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    fetchBids(jobId);
  }, [jobId]);

  const fetchBids = async (jobId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/jobs/${jobId}/bids`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setBids(data.bids);
      } else {
        console.error('Failed to fetch bids');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSelectBid = async (bidId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/jobs/${jobId}/select-bid`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ bidId }),
      });
      if (response.ok) {
        alert('Bid selected successfully!');
        fetchBids(jobId); // Refresh bids after selection
      } else {
        alert('Failed to select bid.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to select bid.');
    }
  };

  return (
    <div className="bid-list">
      <h3>Bids for This Job</h3>
      <ListGroup>
        {bids.map((bid) => (
          <ListGroup.Item key={bid.id}>
            <p>Freelancer: {bid.freelancer}</p>
            <p>Bid Amount: ${bid.amount}</p>
            <Button variant="primary" onClick={() => handleSelectBid(bid.id)}>
              Select Bid
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default BidList;
