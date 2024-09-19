import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log('Login credentials:', credentials);
    // Aquí puedes añadir la lógica para autenticar al usuario
  };

  return (
    <div>
 
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
