import { useState } from "react"; // importamos el hook useState para manejar el estado local
import { Link, useNavigate } from "react-router-dom"; // importamos Link para navegación y useNavigate para redirigir a otras páginas
import { GetUser } from "../services/GetUser"; // importamos el servicio GetUser para verificar las credenciales del usuario
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap'; // importamos componentes de Bootstrap para la interfaz de usuario
import '../styles/LoginStyles.css'; // importamos los estilos personalizados para el login
import 'bootstrap/dist/css/bootstrap.min.css'; // importamos los estilos básicos de Bootstrap

const Login = () => {
  // estados para manejar los inputs del usuario y el mensaje de error
  const [email, setEmail] = useState(""); // estado para el campo de email
  const [password, setPassword] = useState(""); // estado para el campo de password
  const [errorMessage, setErrorMessage] = useState(""); // estado para manejar los mensajes de error
  const navigate = useNavigate(); // hook para redirigir a otras páginas

  // función que maneja el evento de login
  const handleLogin = async (e) => {
    e.preventDefault(); // prevenimos el comportamiento por defecto del formulario (que recargue la página)
    setErrorMessage(""); // limpiamos el mensaje de error antes de hacer la validación

    // función para validar el email y password ingresados
    const validate = () => {
      if (!email || !password) {
        setErrorMessage("Both email and password are required."); // mensaje si el email o password están vacíos
        return false; // retorno falso para indicar que la validación ha fallado
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setErrorMessage("Please enter a valid email."); // mensaje si el email no tiene el formato correcto
        return false;
      }
      return true; // si todo es válido, retorna verdadero
    };

    // si la validación es exitosa, procedemos a verificar al usuario
    if (validate()) {
      const user = await GetUser(email, password); // llamamos la función GetUser con email y password
      if (user) {
        // si el usuario es válido, mostramos una alerta y redirigimos a la página de inicio
        alert("Login successful.");
        navigate("/HomePage"); // redirige a la página principal después del login
      } else {
        setErrorMessage("Invalid email or password."); // si no se encuentra el usuario, muestra un mensaje de error
      }
    }
  };

  return (
    <div className="login-container mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {/* título del formulario */}
          <h2 className="login-title text-center">Login</h2>

          {/* mensaje de error, si existe */}
          {errorMessage && <Alert className="login-error" variant="danger">{errorMessage}</Alert>}

          {/* formulario de login */}
          <Form onSubmit={handleLogin} className="login-form">
            
            {/* grupo del campo de email */}
            <Form.Group controlId="formEmail" className="login-form-group">
              <Form.Label className="login-label">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email" // texto de marcador de posición en el campo de email
                value={email} // valor del input asociado al estado de email
                onChange={(e) => setEmail(e.target.value)} // actualizamos el estado del email cuando el usuario escribe
                className="login-input" // clase personalizada para el estilo
              />
            </Form.Group>

            {/* grupo del campo de password */}
            <Form.Group controlId="formPassword" className="login-form-group mt-3">
              <Form.Label className="login-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password" // texto de marcador de posición en el campo de password
                value={password} // valor del input asociado al estado de password
                onChange={(e) => setPassword(e.target.value)} // actualizamos el estado del password cuando el usuario escribe
                className="login-input" // clase personalizada para el estilo
              />
            </Form.Group>

            {/* botón para enviar el formulario de login */}
            <Button variant="primary" type="submit" className="login-button mt-4" block>
              Login
            </Button>
          </Form>

          {/* enlace para redirigir a la página de registro */}
          <div className="login-register-link text-center mt-3">
            <Link to="/RegisterPage">No tienes una cuenta? Registrate</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
