import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Login from './page/Login'
import Register from './page/Register'
import Products from './page/Products'
import Cart from './page/Cart'
import Navbar from './page/Navbar'
import Footer from './page/Footer'
import Profile from './page/Profile'
import Checkout from './page/Checkout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
