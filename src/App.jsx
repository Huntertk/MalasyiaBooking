import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Booking from './pages/Booking'
import BookingDateConfirmation from './components/BookingDateConfirmation'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/date-confirm" element={<BookingDateConfirmation />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App