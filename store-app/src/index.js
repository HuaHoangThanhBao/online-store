import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import BlogDetailPage from './components/pages/BlogDetailPage';
import BlogPage from './components/pages/BlogPage';
import CartPage from './components/pages/CartPage';
import CheckoutPage from './components/pages/CheckoutPage';
import ContactPage from './components/pages/ContactPage';
import ProjectDetailPage from './components/pages/ProjectDetailPage';
import ProjectPage from './components/pages/ProjectPage';
import ShopDetailPage from './components/pages/ShopDetailPage';
import ShopPage from './components/pages/ShopPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/shop-detail" element={<ShopDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/blog-detail" element={<BlogDetailPage />} />
        <Route path="/project-detail" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
