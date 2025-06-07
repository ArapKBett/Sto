import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Electronics from './pages/Electronics';
import Phones from './pages/Phones';
import PCs from './pages/PCs';
import Software from './pages/Software';
import Accessories from './pages/Accessories';
import Clothes from './pages/Clothes';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/electronics/phones" element={<Phones />} />
        <Route path="/electronics/pcs" element={<PCs />} />
        <Route path="/electronics/software" element={<Software />} />
        <Route path="/electronics/accessories" element={<Accessories />} />
        <Route path="/clothes" element={<Clothes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
