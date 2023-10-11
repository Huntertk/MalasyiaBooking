import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BookingContexProvider } from './context/BookingContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingContexProvider>
      <App />
    </BookingContexProvider>
  </React.StrictMode>,
)
