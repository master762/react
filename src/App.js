import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Caregory from './components/Category';
import Ads from './components/Ads';
import Sale from './components/Sale';
import Bottomheader from './components/Bottomheader';
import BasketPage from './components/BasketPage';
import ToolsAndEquipmentPage from './components/ToolsAndEquipmentPage';
import Filter from './components/Filter';
import AllProductsPage from './components/AllProductsPage'
import AllSalesPage from './components/AllSalesPage'

function App() {
  const mainPageImages = [
    { src: '/img/categories 1.jpg', alt: 'Fertilizer', text: 'Fertilizer' },
    { src: '/img/categories 2.jpg', alt: 'Protective products', text: 'Protective products and septic tanks' },
    { src: '/img/categories 3.jpg', alt: 'Planting material', text: 'Planting material' },
    { src: '/img/categories 4.jpg', alt: 'Tools and equipment', text: 'Tools and equipment', link: '/tools-and-equipment' },
  ];

  const categoriesImages = [
    ...mainPageImages,
    { src: '/img/categories 5.png', alt: 'Pots and planters', text: 'Pots and planters' },
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
              images={categoriesImages}
              isCategoriesPage={true}
              hideCategoryControls={true}
            />
          }
        />
        <Route
          path="/tools-and-equipment"
          element={
            <>

              <div className='container'>
                <p className='textChapter'>Tools and Equipment</p>
              </div>
              <Filter />
              <ToolsAndEquipmentPage />
            </>
          }
        />
        <Route path="/all-products" element={
          <>

            <div className='container'>
              <p className='textChapter'>All products</p>
            </div>
            <Filter />
            <AllProductsPage />
          </>
        } />
        <Route path="/all-sales" element={
          <>

            <div className='container'>
              <p className='textChapter'>Discounted items</p>
            </div>
            <Filter />
            <AllSalesPage />
          </>
        } />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
