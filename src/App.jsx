import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PaymentFlow from './pages/PaymentFlow';
import CollectionPage from './pages/CollectionPage';
import FavoritesPage from './pages/FavoritesPage';
import Contact from './pages/Contact';
import About from './pages/About';
import Terms from './pages/Terms';
import { CartProvider } from './context/CartContext';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <Router>
      <CartProvider>
        <div className="grain">
          <Navbar activeSection={activeSection} />
          <main>
            <Routes>
              <Route path="/" element={<Home setActiveSection={setActiveSection} />} />
              <Route path="/checkout" element={<PaymentFlow />} />
              <Route path="/collection/:categoryName" element={<CollectionPage />} />
              <Route path="/wishlist" element={<FavoritesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
