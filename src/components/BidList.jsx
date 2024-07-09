import { useEffect, useState } from 'react';

const BidList = ({ jobId }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await fetch(`/jobs/${jobId}/bids`);
        if (response.ok) {
          const data = await response.json();
          setBids(data);
        } else {
          console.error('Error fetching bids:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching bids', error);
      }
    };

    fetchBids();
  }, [jobId]);

  const handleAcceptBid = async (bidId) => {
    try {
      const response = await fetch(`/bids/${bidId}/accept`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        alert('Bid accepted successfully');
        // Optionally update the UI to reflect the bid has been accepted
      } else {
        console.error('Error accepting bid:', response.statusText);
        alert('Error accepting bid');
      }
    } catch (error) {
      console.error('Error accepting bid:', error);
      alert('Error accepting bid');
    }
  };

  return (
    <div>
      <h3>Bids</h3>
      <ul>
        {bids.map((bid) => (
          <li key={bid.id}>
            {bid.amount} by Freelancer {bid.freelancer_id}
            <button onClick={() => handleAcceptBid(bid.id)}>Accept Bid</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BidList;
