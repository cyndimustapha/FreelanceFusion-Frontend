import React, { useEffect, useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';


const BidList = ({ jobId }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    fetchBids(jobId);
  }, [jobId]);

  const fetchBids = async (jobId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/bids/${jobId}`, {
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
  
  return (
    <div className="bid-list">
        <h3>Bids for This Job</h3>
        <ListGroup>
          {bids.map((bid) => (
            <ListGroup.Item key={bid.id}>
              <p>Freelancer: {bid.freelancer.username}</p>
              <p>Bid Amount: ${bid.amount}</p>
              <Button variant="primary">
                Select Bid
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
  );
};

export default BidList;