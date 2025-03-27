import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import './index.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpage" element={<ProductPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
