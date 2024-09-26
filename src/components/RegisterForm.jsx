import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostUser } from "../services/PostUser"; // servicio para enviar los datos del nuevo usuario
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import '../styles/RegisterStyles.css'; // estilos específicos para el formulario de registro

// componente que maneja el formulario de registro de usuarios
const Register = () => {
  // estado para almacenar el correo electrónico ingresado
  const [email, setEmail] = useState("");
  // estado para almacenar la contraseña ingresada
  const [password, setPassword] = useState("");
  // estado para almacenar mensajes de error y mostrarlos en el formulario
  const [errorMessage, setErrorMessage] = useState("");
  // función de React Router para redireccionar a otras páginas
  const navigate = useNavigate();

  // función que se ejecuta cuando el usuario intenta registrar una cuenta
  const handleRegister = (e) => {
    e.preventDefault(); // prevenir el comportamiento predeterminado del formulario
    setErrorMessage(""); // limpiar cualquier mensaje de error previo

    // función interna para validar los campos del formulario
    const validate = () => {
      if (!email || !password) {
        // si faltan el correo o la contraseña, mostrar un mensaje de error
        setErrorMessage("Both email and password are required.");
        return false;
      }
      // validación para verificar si el formato del correo es válido
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setErrorMessage("Please enter a valid email.");
        return false;
      }
      return true; // si todo está bien, continuar con el registro
    };

    // si la validación es exitosa, proceder con el registro
    if (validate()) {
      // enviar los datos del usuario a través del servicio PostUser
      PostUser(email, password);
      // mostrar un mensaje de éxito
      alert("Registration successful.");
      // redirigir al usuario a la página de inicio de sesión
      navigate("/LoginPage");
    }
  };

  return (
    <div className="register-container mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {/* título del formulario */}
          <h2 className="register-title text-center">Register</h2>
          {/* mostrar el mensaje de error si existe */}
          {errorMessage && <Alert className="register-error" variant="danger">{errorMessage}</Alert>}
          {/* formulario de registro */}
          <Form onSubmit={handleRegister} className="register-form">
            <Form.Group controlId="formEmail" className="register-form-group">
              {/* etiqueta y campo para el correo electrónico */}
              <Form.Label className="register-label">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email" // texto de sugerencia en el campo
                value={email} // valor del campo de correo
                onChange={(e) => setEmail(e.target.value)} // actualizar el estado con el valor ingresado
                className="register-input"
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="register-form-group mt-3">
              {/* etiqueta y campo para la contraseña */}
              <Form.Label className="register-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password" // texto de sugerencia en el campo
                value={password} // valor del campo de contraseña
                onChange={(e) => setPassword(e.target.value)} // actualizar el estado con el valor ingresado
                className="register-input"
              />
            </Form.Group>

            {/* botón para enviar el formulario */}
            <Button variant="primary" type="submit" className="register-button mt-4" block>
              Register
            </Button>
          </Form>

          {/* enlace para redirigir a la página de inicio de sesión */}
          <div className="register-login-link text-center mt-3">
            <Link to="/LoginPage">Ya tienes una cuenta?</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;

