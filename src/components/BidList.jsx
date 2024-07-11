import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const BidList = ({ jobId }) => {
  const { auth } = useContext(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await fetch(`/jobs/${jobId}/bids`, {
          headers: {
            'Authorization': `Bearer ${auth.access_token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setBids(data);
        } else {
          console.error('Error fetching bids', data);
        }
      } catch (error) {
        console.error('Error fetching bids', error);
      }
    };

    fetchBids();
  }, [jobId, auth]);

  const acceptBid = async (bidId) => {
    try {
      const response = await fetch(`/bids/${bidId}/accept`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${auth.access_token}`,
        },
      });
      if (response.ok) {
        alert('Bid accepted');
      } else {
        console.error('Error accepting bid', await response.json());
      }
    } catch (error) {
      console.error('Error accepting bid', error);
    }
  };

  return (
    <div>
      <h3>Bids</h3>
      <ul>
        {bids.map((bid) => (
          <li key={bid.id}>
            {bid.amount} by Freelancer {bid.freelancer_id}
            {auth.role === 'client' && (
              <button onClick={() => acceptBid(bid.id)}>Accept</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BidList;
