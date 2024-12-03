import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Caregory from './components/Category';
import Ads from './components/Ads';
import Sale from './components/Sale';
import Bottomheader from './components/Bottomheader';
import BasketPage from './components/BasketPage';

function App() {
  const mainPageImages = [
    { src: '/img/categories 1.jpg', alt: 'Fertilizer', text: 'Fertilizer' },
    { src: '/img/categories 2.jpg', alt: 'Protective products', text: 'Protective products and septic tanks' },
    { src: '/img/categories 3.jpg', alt: 'Planting material', text: 'Planting material' },
    { src: '/img/categories 4.jpg', alt: 'Tools and equipment', text: 'Tools and equipment' },
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Bottomheader />
              <Caregory images={mainPageImages} isCategoriesPage={false} hideCategoryControls={false} />
              <Ads />
              <Sale />
            </>
          }
        />
        <Route
          path="/categories"
          element={
            <Caregory
              images={[
                { src: '/img/categories 1.jpg', alt: 'Fertilizer', text: 'Fertilizer' },
                { src: '/img/categories 2.jpg', alt: 'Protective products', text: 'Protective products and septic tanks' },
                { src: '/img/categories 3.jpg', alt: 'Planting material', text: 'Planting material' },
                { src: '/img/categories 4.jpg', alt: 'Tools and equipment', text: 'Tools and equipment' },
                { src: '/img/categories 5.png', alt: 'Pots and planters', text: 'Pots and planters' },
              ]}
              isCategoriesPage={true}
              hideCategoryControls={true} // Скрываем элементы на странице категорий
            />
          }
        />
        <Route path="/all-products" element={<div>All Products Page</div>} />
        <Route path="/all-sales" element={<div>All Sales Page</div>} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
