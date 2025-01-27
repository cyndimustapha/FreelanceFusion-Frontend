import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../redux/jobListings/jobDetails.js';
import Navbar from '../../pages/Navbar';
import BidForm from '../BidForm';
import BidList from '../BidList';
import Loading from './Loading';
import './styles/JobDetails.css';

const JobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showBidForm, setShowBidForm] = useState(false);

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [id, dispatch]);

  const { loading, details } = useSelector((state) => ({
    loading: state.details.loading,
    details: state.details.details
  }));

  const handleToggleBidForm = () => {
    setShowBidForm(!showBidForm);
  };


  if (!details || loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="job-details">
        <h1 className="job-title">{details.title}</h1>
        <p className="job-description">{details.description}</p>
        <p className="job-budget">Budget: ${details.budget}</p>
        <p className="job-client-id">Client Name: {details.companyName}</p>
        <p className="job-status">Location: {details.location}</p> <br /> 

        <button onClick={handleToggleBidForm}>
          {showBidForm ? 'Hide Bid Form' : 'Show Bid Form'}
        </button><br /> 

        {showBidForm && <BidForm jobId={id} />}
        <br /> 
        <BidList jobId={id} />
      </div>
    </>
  );
};

export default JobDetails;
