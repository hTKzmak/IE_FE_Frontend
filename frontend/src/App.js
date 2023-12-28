import './App.css';

import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import { useState } from 'react';

function App() {

  const [menuActive, setMenuActive] = useState(false)

  return (
    <div>
      <Header
        active={menuActive}
        setActive={setMenuActive}
      />
      <Menu
        active={menuActive}
        setActive={setMenuActive}
      />
      <Routes>
        {/* <Route path='/' element={<HomePage />} />
        <Route path='/categoires' element={<CategoriesPage />} />
        <Route path='/products' element={<ProductsPage type='all' />} />
        <Route path='/products/sales' element={<ProductsPage type='sale' />} />
        <Route path='/category/:id' element={<ProductsPage type='categories' />} />
        <Route path='/products/:id' element={<ProductItemPage />} />
        <Route path='/basket' element={<BasketPage />} />
        <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
