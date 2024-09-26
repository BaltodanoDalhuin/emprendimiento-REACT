import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioPage from './FormularioPage';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Otras rutas */}
        <Route path="/contact" element={<FormularioPage />} />
      </Routes>
    </Router>
  );
};

export default App;
