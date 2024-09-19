import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import MedidasPage from '../pages/MedidasPage';
import ProductosPage from '../pages/ProductosPage';


const Routing = () => {
  return (
    <Router>
        <Link to="/LoginPage">Login</Link> | 
        <Link to="/RegisterPage">Register</Link> /
        <Link to="/HomePage">Home</Link> /
        <Link to="/MedidasPage">Medidas</Link>/
        <Link to="/ProductosPage">Productos</Link>/
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/MedidasPage" element={<MedidasPage />} />
        <Route path="/ProductosPage" element={<ProductosPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
