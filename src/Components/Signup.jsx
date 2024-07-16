import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'client', // Default role
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }

      navigate('/signin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.signupContainer}>
      <div style={styles.centeredForm}>
        <div style={styles.signupForm}>
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

            <Form.Group className="mb-3" controlId="formBasicRole">
              <Form.Label style={styles.formLabel}>Role</Form.Label>
              <Form.Select
                name="role"
                value={formData.role}
                onChange={handleChange}
                style={styles.formControl}
              >
                <option value="client">Client</option>
                <option value="freelance">Freelance</option>
              </Form.Select>
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
    backgroundColor: '#f0f0f0',
  },
  centeredForm: {
    width: '100%',
    maxWidth: '400px',
  },
  signupForm: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
  },
  formLabel: {
    fontWeight: 'bold',
  },
  formControl: {
    width: '100%',
    marginBottom: '1rem',
  },
  button: {
    width: '100%',
    marginTop: '1rem',
  },
};

export default Signup;