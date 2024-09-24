import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostUser } from "../services/PostUser";
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import '../styles/RegisterStyles.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const validate = () => {
      if (!email || !password) {
        setErrorMessage("Both email and password are required.");
        return false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setErrorMessage("Please enter a valid email.");
        return false;
      }
      return true;
    };

    if (validate()) {
      PostUser(email, password);
      alert("Registration successful.");
      navigate("/LoginPage");
    }
  };

  return (
    <div className="register-container mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 className="register-title text-center">Register</h2>
          {errorMessage && <Alert className="register-error" variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleRegister} className="register-form">
            <Form.Group controlId="formEmail" className="register-form-group">
              <Form.Label className="register-label">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="register-input"
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="register-form-group mt-3">
              <Form.Label className="register-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="register-input"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="register-button mt-4" block>
              Register
            </Button>
          </Form>
          <div className="register-login-link text-center mt-3">
            <Link to="/LoginPage">Ya tienes una cuenta?</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
