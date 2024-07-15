import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

function Home() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#f0f0f0',
    },
    formWrapper: {
      width: '90%',
      maxWidth: '500px',
      background: '#ffffff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e0e0e0',
      boxSizing: 'border-box',
    },
    loginForm: {
      textAlign: 'center',
    },
    heading: {
      fontSize: '28px',
      marginBottom: '30px',
      color: '#333',
    },
    button: {
      width: '100%',
      marginBottom: '15px',
      borderRadius: '5px',
      fontSize: '16px',
    },
    signInWrapper: {
      marginTop: '20px',
      borderTop: '1px solid #e0e0e0',
      paddingTop: '20px',
    },
    signInLabel: {
      marginBottom: '15px',
      fontWeight: 'bold',
      fontSize: '18px',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <div style={styles.loginForm}>
          <h1 style={styles.heading}>Welcome to Freelance Fusion!</h1>
          <Button
            as={Link}
            to="/signup"
            variant="primary"
            style={styles.button}
          >
            Create Account
          </Button>
          <div style={styles.signInWrapper}>
            <p style={styles.signInLabel}>Sign In</p>
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
