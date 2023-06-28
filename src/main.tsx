import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './pages/about/About'
import ContactUs from './pages/contact/Contact'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/about"
          element={
            <About />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactUs />
            
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
