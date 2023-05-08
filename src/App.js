import './App.css';
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import SingleProduct from "./pages/SingleProduct";
import AuthWrapper from "./pages/AuthWrapper";
import Checkout from "./pages/Checkout";
import Sidebar from "./components/Sidebar";

function App() {

  return (
      <AuthWrapper>
          <BrowserRouter>
              <Header />
              <Sidebar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<ErrorPage />} />
                  <Route path="/products/:id" element={<SingleProduct />} />
                  <Route path="/checkout" element={<Checkout />} />
              </Routes>
              <Footer />
          </BrowserRouter>
      </AuthWrapper>
  );
}

export default App;
