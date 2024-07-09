import { useState } from 'react';

function BidForm({ jobId, freelancerId }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/bids', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          job_id: jobId,
          freelancer_id: freelancerId,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Bid placed successfully');
    } catch (error) {
      console.error('Error placing bid', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Bid Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button type="submit">Place Bid</button>
    </form>
  );
}

export default BidForm;
