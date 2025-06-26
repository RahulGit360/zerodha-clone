import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes, Route,} from 'react-router-dom';
import HomePage from './landing_Page/home/HomePage';
import SignUp from './landing_Page/signup/SignUp'; 
import AboutPage from './landing_Page/about/AboutPage';  
import ProductPage from './landing_Page/products/ProductPage';  
import Pricing from './landing_Page/pricing/PricingPage';
import SupportPage from './landing_Page/support/SupportPage'; 
import Navbar from './landing_Page/Navbar';  
import Footer from './landing_Page/Footer';   
import NotFound from '../src/NotFound';   



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/home' element={<HomePage/>}></Route>
    <Route path='/Signup' element={<SignUp/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/Products' element={<ProductPage/>}></Route>
    <Route path='/pricing' element={<Pricing />}></Route>
    <Route path='/support' element={<SupportPage/>}></Route>
    <Route path='/*' element={<NotFound/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

