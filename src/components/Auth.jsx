import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "client", // Default role
  });
  const [error, setError] = useState("");

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setFormData({
      username: "",
      email: "",
      password: "",
      role: "client",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const url = isLogin
      ? "http://127.0.0.1:5000/api/login"
      : "http://127.0.0.1:5000/api/users"; // Updated to match your endpoint
    const method = "POST"; // Both login and user creation use POST
    const body = isLogin
      ? JSON.stringify({ email: formData.email, password: formData.password })
      : JSON.stringify(formData);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Authentication failed");
      }

      const responseData = await response.json();

      if (isLogin) {
        localStorage.setItem("token", responseData.access_token);
        localStorage.setItem("user", JSON.stringify(responseData.user));
        navigate("/home"); // Redirect to home after login
      } else {
        toggleAuthMode();
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <div style={styles.formWrapper}>
            <Form onSubmit={handleSubmit}>
              {error && <Alert variant="danger">{error}</Alert>}
              {!isLogin && (
                <Form.Group className="mb-3" controlId="formGroupUsername">
                  <Form.Label style={styles.label}>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </Form.Group>
              )}

              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label style={styles.label}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label style={styles.label}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </Form.Group>

              {!isLogin && (
                <Form.Group className="mb-3" controlId="formGroupRole">
                  <Form.Label style={styles.label}>Role</Form.Label>
                  <Form.Select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    style={styles.input}
                  >
                    <option value="client">Client</option>
                    <option value="freelance">Freelance</option>
                  </Form.Select>
                </Form.Group>
              )}

              <Button variant="primary" type="submit" style={styles.button}>
                {isLogin ? "Log in" : "Sign up"}
              </Button>
            </Form>

            <div style={styles.toggleWrapper}>
              <Button
                variant="link"
                onClick={toggleAuthMode}
                style={styles.toggleButton}
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Log in"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  container: {
    width: "100%",
    maxWidth: "400px",
  },
  innerContainer: {
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
  },
  formWrapper: {
    padding: "2rem",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    marginBottom: "1rem",
  },
  button: {
    width: "100%",
    marginTop: "1rem",
  },
  toggleWrapper: {
    marginTop: "1rem",
    textAlign: "center",
  },
  toggleButton: {
    fontWeight: "bold",
  },
};

export default Auth;
