import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetUser } from "../services/GetUser";
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import '../styles/LoginStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Limpiar el mensaje de error

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
      const user = await GetUser(email, password);
      if (user) {
        alert("Login successful.");
        navigate("/HomePage"); 
      } else {
        setErrorMessage("Invalid email or password.");
      }
    }
  };

  return (
    <div className="login-container mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 className="login-title text-center">Login</h2>
          {errorMessage && <Alert className="login-error" variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleLogin} className="login-form">
            <Form.Group controlId="formEmail" className="login-form-group">
              <Form.Label className="login-label">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="login-form-group mt-3">
              <Form.Label className="login-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="login-button mt-4" block>
              Login
            </Button>
          </Form>
          <div className="login-register-link text-center mt-3">
            <Link to="/RegisterPage">No tienes una cuenta? Registrate</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
