import { useState } from 'react';
import './JobPostingForm.css';

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    budget: '',
    companyName: '',
    email: ''
  });
  
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const JOBS_API = 'https://freelance-fusion-backend.vercel.app/api/jobs';
    const response = await fetch(JOBS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Job posted successfully!');
    } else {
      alert('Failed to post job.');
    }
  };


  return (
    <div className="job-posting-form">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <h1>Tell Us What You Are Looking For ...</h1>
            <label>
              <h2>Job Title</h2>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </label>
            <button type="button" onClick={handleNext}>Next</button>
          </>
        )}
        {step === 2 && (
          <>
            <h1>Tell Us What You Need Done ...</h1>
            <label>
              <h2>Job Description</h2>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <button type="button" onClick={handleBack}>Back</button>
            <button type="button" onClick={handleNext}>Next</button>
          </>
        )}
        {step === 3 && (
          <>
            <h1>Give Us The Job Location ...</h1>
            <label>
              <h2>Job Location</h2>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </label>
            <button type="button" onClick={handleBack}>Back</button>
            <button type="button" onClick={handleNext}>Next</button>
          </>
        )}
        {step === 4 && (
          <>
            <h1>Tell Us Your Budget Plan ...</h1>
            <label>
              <h2>Job Budget</h2>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              />
            </label>
            <button type="button" onClick={handleBack}>Back</button>
            <button type="button" onClick={handleNext}>Next</button>
          </>
        )}
        {step === 5 && (
          <>
            <h1>Tell Us About Your Company ...</h1>
            <label>
              <h2>Company Name</h2>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </label>
            <button type="button" onClick={handleBack}>Back</button>
            <button type="button" onClick={handleNext}>Next</button>
          </>
        )}
        {step === 6 && (
          <>
            <h1>Provide Your Contact Information ...</h1>
            <label>
              <h2>Email</h2>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <button type="button" onClick={handleBack}>Back</button>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </div>
  );
};

export default JobPostingForm;