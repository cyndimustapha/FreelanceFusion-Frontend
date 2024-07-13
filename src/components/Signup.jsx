import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here

    // Redirect to SignIn page after successful signup
    navigate('/signin');
  };

  return (
    <div className="signup-container" style={styles.signupContainer}>
      <div className="centered-form" style={styles.centeredForm}>
        <div className="signup-form rounded shadow-lg p-5" style={styles.signupForm}>
          <h1 className="text-center text-primary mb-4">Sign Up</h1>
          <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label style={styles.formLabel}>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                style={styles.formControl}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={styles.formLabel}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.formControl}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={styles.formLabel}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.formControl}
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={styles.button}>
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  signupContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0', // Light gray background
  },
  centeredForm: {
    width: '400px',
  },
  signupForm: {
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
    backgroundColor: '#ffffff', // White background
    padding: '30px',
  },
  formLabel: {
    color: '#333', // Dark gray label text
  },
  formControl: {
    backgroundColor: '#f5f5f5', // Light gray input field
    borderColor: '#ddd', // Light gray border
  },
  button: {
    backgroundColor: '#3f51b5', // Deep purple background
    color: '#ffffff',
    borderColor: '#3f51b5',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  },
};

export default Signup;
