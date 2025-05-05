import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Incidents from './pages/Incidents'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

function App() {
  // Preload images to check if they exist
  useEffect(() => {
    const preloadImages = [
      '/assets/backgroundImage.jpg',
      '/src/assets/backgroundImage.jpg',
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
      };
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
