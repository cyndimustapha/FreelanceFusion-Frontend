import { useState } from 'react';
import './BidForm.css';
import PropTypes from 'prop-types';

const BidForm = ({ jobId }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://freelance-fusion-backend.vercel.app/api/bids`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ amount, job_id: jobId }),
      });
      if (response.ok) {
        setAmount('');
        alert('Bid placed successfully');
        window.location.reload();
      } else {
        console.error('Error placing bid', await response.json());
      }
    } catch (error) {
      console.error('Error placing bid', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bid-form">
      <div className="form-group">
        <label htmlFor="bidAmount">Bid Amount</label>
        <input
          type="text"
          id="bidAmount"
          className="form-control"
          placeholder="Enter your bid amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Place Bid
      </button>
    </form>
  );
};

BidForm.propTypes = {
  jobId: PropTypes.number.isRequired,
};

export default BidForm;
