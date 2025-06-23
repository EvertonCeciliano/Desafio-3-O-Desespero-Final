import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../Layouts/DefaultLayout';
import PrivateRoute from './PrivateRoutes'; 
import { NotFound } from '../Components/NotFound/NotFound'; 

const Home = lazy(() => import('../Pages/Home/Home').then(module => ({ default: module.Home })));
const Cart = lazy(() => import('../Pages/Cart/Cart').then(module => ({ default: module.Cart })));
const Checkout = lazy(() => import('../Pages/Checkout/Checkout').then(module => ({ default: module.Checkout })));
const Contact = lazy(() => import('../Pages/Contact/Contact').then(module => ({ default: module.Contact })));
const Login = lazy(() => import('../Pages/Login/Login').then(module => ({ default: module.Login })));
const Shop = lazy(() => import('../Pages/Shop/Shop').then(module => ({ default: module.Shop })));
const ProductDetails = lazy(() => import('../Pages/ProductDetails/ProductDetails').then(module => ({ default: module.ProductDetails })));
const Compare = lazy(() => import('../Pages/Compare/Compare').then(module => ({ default: module.Compare })));
const About = lazy(() => import('../Pages/About/About').then(module => ({ default: module.About })));

export const Router: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<PrivateRoute element={<Checkout />} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
