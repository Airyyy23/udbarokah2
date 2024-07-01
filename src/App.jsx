import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
import Homepage from './pages/home';
import Product from './pages/product';
import About from './pages/about';
import NotFound from './pages/error/notFound';
import MK9 from './pages/detail/mk9'
import MK8 from './pages/detail/mk8'
import Material from './pages/detail/material';

function App() {
  return (
    <Router>
      <div className="relative flex flex-col justify-between items-center">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail-mk9" element={<MK9 />} />
            <Route path="/detail-mk8" element={<MK8 />} />
            <Route path="/detail-material" element={<Material />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
