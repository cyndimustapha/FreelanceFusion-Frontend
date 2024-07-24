import React, { useEffect, useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';


const BidList = ({ jobId }) => {
  const [bids, setBids] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchBids(jobId);
  }, [jobId]);

  const fetchBids = async (jobId) => {
    try {
      const response = await fetch(`https://freelance-fusion-backend.vercel.app/api/bids/${jobId}`, {
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
      const response = await fetch(`https://freelance-fusion-backend.vercel.app/api/bids/${jobId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ "bid_id": bidId }),
      });
      if (response.ok) {
        alert('Bid selected successfully!');
        fetchBids(jobId);
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
              <p>Freelancer: {bid.freelancer.username}</p>
              <p>Bid Amount: ${bid.amount}</p>
              <p>Selected: {bid.selected ? 'Yes' : 'No'}</p>
              {bid.job.email !== user.email ? <br /> : (
                <Button variant="primary" onClick={() => handleSelectBid(bid.id)} disabled={bid.selected} >
                  Select Bid
                </Button>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
  );
};

export default BidList;