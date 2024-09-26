import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log('Login credentials:', credentials);
 
  };

  return (
    <div>
 
      <LoginForm onLogin={handleLogin} />
    
    </div>
  );
};

export default LoginPage;
