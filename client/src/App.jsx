import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import CategoryList from './pages/CategoryList'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/categories' element={<CategoryList/>} />
      <Route path='/products' element={<ProductList/>} />
      <Route path='/products/:category' element={<ProductList/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
  );
};

export default App