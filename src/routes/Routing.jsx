import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import MedidasPage from '../pages/MedidasPage';
import ProductosPage from '../pages/ProductosPage';
import ColecionesPage from '../pages/ColecionesPage';
import UbicacionPage from '../pages/UbicacionPage';



const Routing = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/MedidasPage" element={<MedidasPage />} />
        <Route path="/ProductosPage" element={<ProductosPage />} />
        <Route path="/ColecionesPage" element={<ColecionesPage/>} />
        <Route path="/UbicacionPage" element={<UbicacionPage />} />

      </Routes>
    </Router>
  );
};

export default Routing;
