import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Booking from './pages/Booking'
import BookingDateConfirmation from './components/BookingDateConfirmation'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './pages/admin/AdminLogin'


const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer position='top-center' />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/date-confirm" element={<BookingDateConfirmation />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
          <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App