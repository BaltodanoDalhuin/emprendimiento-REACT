import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  const handleRegister = (credentials) => {
    console.log('Register credentials:', credentials);
    // Aquí puedes añadir la lógica para registrar al usuario
  };

  return (
    <div>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
