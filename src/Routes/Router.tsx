import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../Layouts/DefaultLayout';
import { Home } from '../Pages/Home/Home';
import { Cart } from '../Pages/Cart/Cart';
import { Checkout } from '../Pages/Checkout/Checkout';
import { Contact } from '../Pages/Contact/Contact';
import { Login } from '../Pages/Login/Login';
import { Shop } from '../Pages/Shop/Shop';
import { SingleProduct } from '../Pages/SingleProduct/SingleProduct';
import PrivateRoute from './PrivateRoutes'; 
import { NotFound } from '../Components/NotFound/NotFound'; 

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/checkout" element={<PrivateRoute element={<Checkout />} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
