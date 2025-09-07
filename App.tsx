import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import PUBGTopUp from './components/PUBGTopUp';
import MLDiamonds from './components/MLDiamonds';
import FreefireDiamonds from './components/FreefireDiamonds';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pubg-topup" element={<PUBGTopUp />} />
          <Route path="/ml-diamonds" element={<MLDiamonds />} />
          <Route path="/freefire-diamonds" element={<FreefireDiamonds />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;