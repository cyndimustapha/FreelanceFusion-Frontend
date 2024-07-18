import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

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

    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signin failed");
      }

      const responseData = await response.json();
      localStorage.setItem("token", responseData.access_token);
      localStorage.setItem("user", JSON.stringify(responseData.user));
      navigate("/");
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

              <Button variant="primary" type="submit" style={styles.button}>
                Log in
              </Button>
            </Form>
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
};

export default SignIn;
