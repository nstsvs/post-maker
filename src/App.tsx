import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import NotFound from './pages/not-found/Not-found';
import Order from './pages/order/Order';
import ProductCard from './pages/product-card/Product-card'
import ProductList from './pages/products-list/Products-list'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/orders" element={<Order />} />
        <Route path='/product-card' element={<ProductCard />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
