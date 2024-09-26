import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  const handleRegister = (credentials) => {
    console.log('Register credentials:', credentials);
 
  };

  return (
    <div>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
